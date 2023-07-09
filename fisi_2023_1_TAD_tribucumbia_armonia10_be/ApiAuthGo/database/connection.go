package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	
)

var DB *gorm.DB

func Connect(){
	dsn :="root:@tcp(host.docker.internal:3306)/gimnasio?charset=utf8mb4&parseTime=True&loc=Local"
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	DB=connection

	if err!= nil{
		panic("could not connect to the database")
	}
}