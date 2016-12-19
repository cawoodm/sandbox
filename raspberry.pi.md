#Raspberry Pi

## General
General Pi config: `sudo raspi-config`

## Hardware

##Video
Display on TV was chopped off on bottom and right.
Fix right crop: `OVERSCAN_RIGHT`
Fix bottom crop: `OVERSCAN_BOTTOM`
Force HDMI regardless of what is detected (comment out to enable RCA video): `hdmi_force_hotplug=1`

### Audio
Set audio to automatic (0): `amixer cset numid=3 0`
Set audio to analog out (1): `amixer cset numid=3 1`
Set audio to HDMI (2): `amixer cset numid=3 2`
