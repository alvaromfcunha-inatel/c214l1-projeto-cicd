sudo apt install mailutils
echo $1
echo $2
echo "$1" | mail -s "$1" $2
