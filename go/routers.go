/*
 * SyskenGacha-backend
 *
 * SyskenGachaのバックエンド。
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

// Route is the information for every URI.
type Route struct {
	// Name is the name of this Route.
	Name string
	// Method is the string for the HTTP method. ex) GET, POST etc..
	Method string
	// Pattern is the pattern of the URI.
	Pattern string
	// HandlerFunc is the handler function of this route.
	HandlerFunc gin.HandlerFunc
}

// Routes is the list of the generated Route.
type Routes []Route

// NewRouter returns a new router.
func NewRouter() *gin.Engine {
	router := gin.Default()

	router.Static("/ui", "api/ui")
	router.StaticFile("/openapi.yaml", "api/openapi.yaml")

	customStaticPath := os.Getenv("static_uri")
	customStaticDir := os.Getenv("static_dir")
	if customStaticDir != "" && customStaticPath != "" {
		router.Static(customStaticPath, customStaticDir)
	}

	for _, route := range routes {
		switch route.Method {
		case http.MethodGet:
			router.GET(route.Pattern, route.HandlerFunc)
		case http.MethodPost:
			router.POST(route.Pattern, route.HandlerFunc)
		case http.MethodPut:
			router.PUT(route.Pattern, route.HandlerFunc)
		case http.MethodPatch:
			router.PATCH(route.Pattern, route.HandlerFunc)
		case http.MethodDelete:
			router.DELETE(route.Pattern, route.HandlerFunc)
		}
	}

	return router
}

// Index is the index handler.
func Index(c *gin.Context) {
	c.String(http.StatusOK, "Hello World!")
}

var routes = Routes{
	{
		"Index",
		http.MethodGet,
		"/",
		Index,
	},

	{
		"AdminItemPost",
		http.MethodPost,
		"/admin/item",
		AdminItemPost,
	},

	{
		"AdminItemPut",
		http.MethodPut,
		"/admin/item",
		AdminItemPut,
	},

	{
		"AdminUploadPost",
		http.MethodPost,
		"/admin/upload",
		AdminUploadPost,
	},

	{
		"AuthUserIdPost",
		http.MethodPost,
		"/admin/auth/:user_id",
		AuthUserIdPost,
	},

	{
		"BcryptGet",
		http.MethodPost,
		"/admin/bcrypt",
		BcryptGet,
	},

	{
		"GachaGet",
		http.MethodGet,
		"/backend/gacha",
		GachaGet,
	},

	{
		"GachaItemIdGet",
		http.MethodGet,
		"/backend/gacha/:id",
		GachaItemIdGet,
	},

	{
		"RandomGet",
		http.MethodGet,
		"/backend/gacha/random/",
		RandomGet,
	},

	{
		"StaticPictIdGet",
		http.MethodGet,
		"/backend/static/:id",
		StaticPictIdGet,
	},

	//{
	//	"UIGet",
	//	http.MethodGet,
	//	"/ui",
	//	UI,
	//},
}
