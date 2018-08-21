#Raspberry Pi

## General
General Pi config: `sudo raspi-config`

## Boot
To set automatic boot OS (partition) you need to understand which partitions you have and what is installed on each:
* `sudo cfdisk /dev/mmcblk0` will show you all partitions
 * NOOBs is always on partition 1 (i.e. `/dev/mmcblk0p1`)
 * Partition 2 is an extended partition meaning it has several subpartitions (typically mmcblk0p5 and higher)
 * Type `cat /etc/fstab` to see which partition is mounted as your root. If you see `/dev/mmcblkop7   /` then your OS (Raspian) is on partition 7
 * 
* Determine the FAT partition: `sudo fdisk -l` (it should be mmcblk0p3)
* Mount it: `mount /dev/mmcblk0p3 /mnt/`
* Look for installed_os.json: `ls /mnt/`
* View the file to see which partition your OS is on. It's the first item in the `partitions` section e.g. `"partitions" : ["/dev/mmcblk0p7"`
* Note this number and add it to `noobs.conf`
  * `sudo nano /mnt/noobs.conf`
  * `default_partition_to_boot=7`
* Save file, unmount `umount /mnt/` and `reboot`

### Removing an OS
There are 3 basic steps:
1. Remove the OS from the NOOBS menu
2. Delete the partition(s) the OS uses
3. Optionally, re-assign the partition space or create a new partition from it

1. Remove OS from NOOBS menu:
* Edit NOOBS menu : `sudo nano /media/pi/SETTINGS/installed_os.json`
* Look for the section concerning your OS between the `{}` brackets.
* Note the partition numbers used (e.g. 
* Remove the section concerning your OS to remove (everything between `{` and `}` including the comma `,` before `{` must go`!
* Save and exit (Ctrl+X, Y, Enter)

2. Delete the Partitions:
* Run `sudo cfdisk /dev/mmcblk0`
* Select the 2 partitions noted above
* Use `<Tab>` key to select the "Delete" option and press enter
* Do this for both partitions - note as you delete a partition, the following partitions are renumbered so if you wanted to delete partitions 8 and 9 and you deleted 8 first, 9 would now be called 8 and you'd have to delete 8 "again".
* Use `<Tab>` key to select "Write" and press enter. Next type "yes" and press enter.
* You can now Quit and reboot

3. Re-gain the lost space
This is very tricky especially if you wish to re-claim the space for your current booted (Raspian) partition.
One way is to use fdisk to delete your current partition and re-create it with the exact same start position and a new, larger end position. One type and you lose all your data!!

To reboot to a specific partition (e.g. 7):
```
sudo su -c 'echo 7 > /sys/module/bcm2708/parameters/reboot_part'
sudo reboot
```

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
