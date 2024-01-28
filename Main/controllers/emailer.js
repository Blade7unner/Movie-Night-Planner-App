const cron = require('node-cron');
const { Event } = require('../models');
const { sendEmail } = require('../utils/emailService');
const { Op } = require('sequelize');

// Function to check and schedule email reminders
function checkAndScheduleReminders() {
    cron.schedule('*/10 * * * *', async () => {
        try {
            const currentTime = new Date();
            const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);

            const upcomingEvents = await Event.findAll({
                where: {
                    event_date: {
                        [Op.gte]: currentTime,
                        [Op.lte]: oneHourLater
                    }
                }
            });

            upcomingEvents.forEach(event => {
                const timeUntilEvent = new Date(event.event_date).getTime() - currentTime.getTime();
                setTimeout(() => {
                    sendEmail({
                        to: event.invitees,
                        subject: `Reminder: Movie Night for "${event.movie_name}" is coming up!`,
                        text: `Don't forget your movie night at ${event.event_location} is starting in one hour!`
                    });
                }, timeUntilEvent - 60 * 60 * 1000);
            });
        } catch (error) {
            console.error('Error in scheduling email reminders:', error);
        }
    });
}

module.exports = { checkAndScheduleReminders };
