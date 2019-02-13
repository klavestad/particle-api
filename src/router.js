import express from 'express'
import Particle from './particle'
import { CREDENTIALS } from './CREDENTIALS';

const router = express.Router()

const particle = new Particle(CREDENTIALS);

router.get('/api', (req, res) => {
    res.sendStatus(418)
})

router.get('/api/login', async (req, res) => {
    const token = await particle.login()
    res.send({ token: token })
})

router.get('/api/devices', async (req, res) => {
    const devices = await particle.devices()
    res.send({
        devices: devices
    })
})

router.get('/api/eventstream', async (req, res) => {
    const event = await particle.eventstream()

    let array = [];

    event.on('event', function (data) {
        while (array.length < 10) {
            array.push(data);
        }
        res.send({
            events: array
        })
    });

})

export default router