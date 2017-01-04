#Raspberry Pi

## General
General Pi config: `sudo raspi-config`

## Boot
To set automatic boot OS (partition):
* Determine the FAT partition: `sudo fdisk -l` (it should be mmcblk0p3)
* Mount it: `mount /dev/mmcblk0p3 /mnt/`
* Look for installed_os.json: `ls /mnt/`
* View the file to see which partition your OS is on. It's the first item in the `partitions` section e.g. `"partitions" : ["/dev/mmcblk0p7"`
* Note this number and add it to `noobs.conf`
  * `sudo nano /mnt/noobs.conf`
  * `default_partition_to_boot=7`
* Save file, unmount `umount /mnt/` and `reboot`

## Hardware

##Video
* Display on TV was chopped off on bottom and right.
* Fix right crop: `OVERSCAN_RIGHT`
* Fix bottom crop: `OVERSCAN_BOTTOM`
* Force HDMI regardless of what is detected (comment out to enable RCA video): `hdmi_force_hotplug=1`

### Audio
* Set audio to automatic (0): `amixer cset numid=3 0`
* Set audio to analog out (1): `amixer cset numid=3 1`
* Set audio to HDMI (2): `amixer cset numid=3 2`
