#Raspberry Pi

## General
General Pi config: `sudo raspi-config`

## Hardware

### Audio
Set audio to automatic (0): `amixer cset numid=3 0`
Set audio to analog out (1): `amixer cset numid=3 1`
Set audio to HDMI (2): `amixer cset numid=3 2`