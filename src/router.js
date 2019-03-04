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

router.get('/api/deviceId/:device', async (req, res) => {
    const deviceName = req.params.device
    const particle = new Particle(CREDENTIALS, deviceName);

    const devices = await particle.deviceId()

    res.send({
        devices
    })
})

router.get('/api/attributes/:device', async (req, res) => {
    const deviceName = req.params.device
    const particle = new Particle(CREDENTIALS, deviceName);

    const attributes = await particle.getAttributes()
    res.send({
        attributes: attributes
    })
})

router.get('/api/device/:device', async (req, res) => {
    const deviceName = req.params.device
    const particle = new Particle(CREDENTIALS, deviceName);

    const attributes = await particle.getAttributes()
    res.send({
        attributes: attributes
    })
})

router.get('/api/signal/:device', async (req, res) => {
    const deviceName = req.params.device
    const particle = new Particle(CREDENTIALS, deviceName);

    const signal = await particle.signal()
    res.send({
        signal: signal
    })
})

router.get('/api/signalOff/:device', async (req, res) => {
    const deviceName = req.params.device
    const particle = new Particle(CREDENTIALS, deviceName);

    const signal = await particle.signalOff()
    res.send({
        signal: signal
    })
})

router.get('/api/signal10/:device', async (req, res) => {
    const deviceName = req.params.device
    const particle = new Particle(CREDENTIALS, deviceName);

    const signal = await particle.signal10()
    res.send({
        signal: signal
    })
})

router.get('/api/eventstream', async (req, res) => {
    const event = await particle.eventstream()

    let array = [];

    event.on('event', function (data) {
        console.log(data);
        while (array.length < 10) {
            array.push(data);
        }
        res.send({
            events: array
        })
    });

})

router.get('/api/read/:device/:name', async (req, res) => {
    const deviceName = req.params.device
    const name = req.params.name
    const particle = new Particle(CREDENTIALS, deviceName, name);

    const variable = await particle.read()
    res.send({
        variable: variable
    })
})

router.get('/api/call/:device/:name/:argument', async (req, res) => {
    const deviceName = req.params.device
    const name = req.params.name
    const argument = req.params.argument

    const particle = new Particle(CREDENTIALS, deviceName, name, argument);

    const call = await particle.call()
    res.send({
        responce: call
    })
})

export default router