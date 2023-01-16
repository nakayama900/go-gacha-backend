package openapi

import (
	"bytes"
	"fmt"
	"github.com/joho/godotenv"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

func getLocalImage(path string) (*os.File, error) {
	godotenv.Load()
	file, err := os.Open(
		filepath.Join(os.Getenv("IMG_DIR"), path))
	if err != nil {
		return nil, err
	}
	return file, nil
}

func getRemoteImage(uri string) (io.Reader, error) {
	if uri == "" {
		return nil, fmt.Errorf("uri is empty")
	}
	if ImgByte, ok := RemoteImageCache[uri]; ok {
		return bytes.NewReader(ImgByte), nil
	} else {
		resp, err := http.Get(uri)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()
		buf := new(bytes.Buffer)
		if _, err = buf.ReadFrom(resp.Body); err != nil {
			return nil, err
		}
		RemoteImageList = append(RemoteImageList, uri)
		if len(RemoteImageList) > 100 {
			delete(RemoteImageCache, RemoteImageList[0])
			RemoteImageList = RemoteImageList[1:]
		}
		RemoteImageCache[uri] = buf.Bytes()
		return buf, nil
	}
}

var RemoteImageCache = map[string][]byte{}
var RemoteImageList []string
