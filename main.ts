loops.everyInterval(5000, function () {
    datalogger.log(
    datalogger.createCV("LigthLevel", input.lightLevel()),
    datalogger.createCV("Temperature(Cº)", input.temperature()),
    datalogger.createCV("SoundLevel", input.soundLevel()),
    datalogger.createCV("SoundLevel(dB)", input.soundLevelDb()),
    datalogger.createCV("Acceleration(mg(x))", input.acceleration(Dimension.X)),
    datalogger.createCV("Acceleration(mg(y))", input.acceleration(Dimension.Y)),
    datalogger.createCV("Acceleration(mg(z))", input.acceleration(Dimension.Z)),
    datalogger.createCV("Acceleration(mg(strength))", input.acceleration(Dimension.Strength)),
    datalogger.createCV("rotation(º)roll", input.rotation(Rotation.Roll)),
    datalogger.createCV("rotation(º)pitch", input.rotation(Rotation.Pitch))
    )
    datalogger.log(
    datalogger.createCV("MagneticForce(µT)x", input.magneticForce(Dimension.X)),
    datalogger.createCV("MagneticForce(µT)y", input.magneticForce(Dimension.Y)),
    datalogger.createCV("MagneticForce(µT)z", input.magneticForce(Dimension.Z)),
    datalogger.createCV("MagneticForce(µT)strength", input.magneticForce(Dimension.Strength))
    )
})
