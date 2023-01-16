package openapi

import (
	"github.com/joho/godotenv"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func getLocalImage(path string) (*os.File, error) {
	godotenv.Load()
	file, err := os.Open(
		filepath.Join(os.Getenv("IMG_DIR"), path))
	if err != nil {
		log.Fatal(err)
		return nil, err
	}
	return file, nil
}

func getRemoteImage(uri string) (io.ReadCloser, error) {
	res, err := http.Get(uri)
	if err != nil {
		log.Fatal(err)
		return nil, err
	}
	return res.Body, nil
}
