var ParticleAPI = require('particle-api-js');

export default class Particle {
    constructor({
        username,
        password
    }) {
        this.username = username,
            this.password = password
    }

    async login() {
        const particle = new ParticleAPI();
        const token = particle.login({
            username: this.username,
            password: this.password
        }).then(
            function (data) {
                return data.body.access_token;
            },
            function (err) {
                console.log('Could not log in to the partilce service.', err);
            }
        );
        return await token;
    }

    async devices() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const devices = particle.listDevices({
            auth: token
        });

        devices.then(
            function (devices) {
                return devices
            },
            function (err) {
                console.log('Listing all the devices failed for some reason: ', err);
            }
        );
        return await devices;
    }

    async eventstream() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const eventstream = particle.getEventStream({
            deviceId: 'mine',
            auth: token
        });

        eventstream.then(
            function (stream) {
                return stream
            },
            function (err) {
                console.log('Listing all the devices failed for some reason: ', err);
            }
        );

        return await eventstream;
    }
}
