package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./")))
	err := http.ListenAndServe(":80", nil)
	if err != nil {
		panic(err)
	}
}
