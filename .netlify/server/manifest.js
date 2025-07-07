export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico","img/.DS_Store","img/clips-01.png","img/clips-02.png","img/clips-03.png","img/clips-04.png","img/clips-05.png","img/clips-06.png","img/clips.ai","img/fun-01.png","img/fun-02.png","img/fun.ai","img/nail-polish.png","johnston_headshot.jpg","robots.txt"]),
	mimeTypes: {".png":"image/png",".ai":"application/postscript",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.C9RVomID.js","app":"_app/immutable/entry/app.DYJ4Ph4b.js","imports":["_app/immutable/entry/start.C9RVomID.js","_app/immutable/chunks/entry.XNbsZ40n.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.DYJ4Ph4b.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.BZ_y8pTb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/fun",
				pattern: /^\/fun\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
