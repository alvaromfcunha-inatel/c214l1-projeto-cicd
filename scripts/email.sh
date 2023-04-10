sudo apt install mailutils
echo $1
echo $2
mail -s "$1" $2
