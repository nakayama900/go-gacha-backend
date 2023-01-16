/*
 * SyskenGacha-backend
 *
 * SyskenGachaのバックエンド。
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package main

import (
	"log"

	// WARNING!
	// Change this to a fully-qualified import path
	// once you place this file into your project.
	// For example,
	//
	//sw "github.com/GIT_USER_ID/GIT_REPO_ID/go"
	//
	"github.com/joho/godotenv"
	sw "github.com/nakayama900/go-gacha-backend/go"
)

func main() {
	godotenv.Load()
	log.Printf("Server started")

	router := sw.NewRouter()

	log.Fatal(router.Run(":8080"))
}
