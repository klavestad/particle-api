var ParticleAPI = require('particle-api-js');

export default class Particle {
    constructor({
            username,
            password
        },
        device,
        name,
        argument,
    ) {
        this.username = username,
            this.password = password,
            this.device = device,
            this.name = name,
            this.argument = argument
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
        const devices = await particle.listDevices({
            auth: token
        }).then(
            function (devices) {
                return devices
            },
            function (err) {
                console.log('Listing all the devices failed for some reason: ', err);
            }
        );
        return await devices;
    }

    async deviceId() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const deviceName = this.device;
        const deviceId = await particle.listDevices({
            auth: token
        }).then(
            function (devices) {
                let id;
                devices.body.forEach(o => {
                    if (o.name === deviceName) {
                        id = {
                            id: o.id
                        };
                    } else {
                        return {
                            message: "did not find nothing"
                        };
                    }
                });

                return id;
            },
            function (err) {
                console.log('Listing all the devices failed for some reason: ', err);
            }
        );
        return await deviceId;
    }

    async getAttributes() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const getAttributes = particle.getDevice({
            deviceId: this.device,
            auth: token
        }).then(
            function (data) {
                console.log('Device attrs retrieved successfully:', data);
                return data;
            },
            function (err) {
                console.log('API call failed: ', err);
                return err;
            });

        return await getAttributes;
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

    async call() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const call = particle.callFunction({
            deviceId: this.device,
            name: this.name,
            argument: this.argument,
            auth: token
        });

        call.then(
            function (data) {
                console.log('Function called succesfully:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await call;
    }

    async read() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const read = particle.getVariable({
            deviceId: this.device,
            name: this.name,
            auth: token
        }).then(
            function (data) {
                console.log('Successfully recieved variable data:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await read;
    }

    async claim() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const claim = particle.claimDevice({
            deviceId: this.device,
            auth: token
        }).then(
            function (data) {
                console.log('device claim data:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await claim;
    }

    async remove() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const remove = particle.removeDevice({
            deviceId: this.device,
            auth: token
        }).then(
            function (data) {
                console.log('Removed device:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await remove;
    }

    async rename() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const rename = particle.removeDevice({
            deviceId: this.device,
            auth: token
        }).then(
            function (data) {
                console.log('Renamed device OK:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await rename;
    }

    async signal() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const signal = particle.signalDevice({
            deviceId: this.device,
            signal: true,
            auth: token
        }).then(
            function (data) {
                console.log('Signaling device OK:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await signal;
    }

    async signalOff() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const signal = particle.signalDevice({
            deviceId: this.device,
            signal: false,
            auth: token
        }).then(
            function (data) {
                console.log('Signaling device OK:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred:', err);
                return err;
            });

        return await signal;
    }

    async signal10() {
        //TODO

    }

    async flash() {
        const particle = new ParticleAPI();
        const token = await this.login();
        const flash = particle.flash({
            deviceId: this.device,
            files: {
                /* TODO */
            },
            auth: token
        }).then(
            function (data) {
                console.log('Device flashing started successfully:', data);
                return data;
            },
            function (err) {
                console.log('An error occurred while flashing the device:', err);
                return err;
            });

        return await flash;
    }
}