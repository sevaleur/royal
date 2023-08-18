/*! For license information please see main.8c85db511fb49de1e0ec.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateroyal_arena("main",{"./app/components/Exp/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var n=t("./node_modules/three/build/three.module.js"),a=t("./app/components/Exp/utils/Sizes.js");Object(function(){var e=new Error("Cannot find module './utils/Time.js'");throw e.code="MODULE_NOT_FOUND",e}());var r=t("./app/components/Exp/utils/Resources.js"),i=t("./app/components/Exp/data/sources.js"),o=t("./app/components/Exp/setup/Camera.js"),c=t("./app/components/Exp/setup/Renderer.js"),d=t("./app/components/Exp/World/index.js");class p{static instance;constructor(e,s){if(p.instance)return p.instance;p.instance=this,this.canvas=s,this.sizes=new a.default,this.time=new Object(function(){var e=new Error("Cannot find module './utils/Time.js'");throw e.code="MODULE_NOT_FOUND",e}())(),this.resources=new r.default(i.default),this.scene=new n.Scene,this.camera=new o.default,this.renderer=new c.default,this.resources.on("loaded",(()=>{this.world=new d.default})),this.sizes.on("resize",(()=>{this.resize()}))}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.renderer.update()}}}},(function(e){e.h=()=>"db773866c87eac80ae4d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44Yzg1ZGI1MTFmYjQ5ZGUxZTBlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bWpCQWFlLE1BQU1BLEVBRW5CQyxnQkFFQUMsV0FBQUEsQ0FBWUMsRUFBVUMsR0FFcEIsR0FBR0osRUFBSUssU0FDTCxPQUFPTCxFQUFJSyxTQUViTCxFQUFJSyxTQUFXQyxLQUVmQSxLQUFLQyxPQUFTSCxFQUNkRSxLQUFLRSxNQUFRLElBQUlDLEVBQUFBLFFBQ2pCSCxLQUFLSSxLQUFPLElBQUlDLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLHdDQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsR0FBSixHQUNaTCxLQUFLTSxVQUFZLElBQUlDLEVBQUFBLFFBQVVDLEVBQUFBLFNBQy9CUixLQUFLUyxNQUFRLElBQUlDLEVBQUFBLE1BQ2pCVixLQUFLVyxPQUFTLElBQUlDLEVBQUFBLFFBQ2xCWixLQUFLYSxTQUFXLElBQUlDLEVBQUFBLFFBRXBCZCxLQUFLTSxVQUFVUyxHQUFHLFVBQVUsS0FFMUJmLEtBQUtnQixNQUFRLElBQUlDLEVBQUFBLE9BQU8sSUFHMUJqQixLQUFLRSxNQUFNYSxHQUFHLFVBQVUsS0FFdEJmLEtBQUtrQixRQUFRLEdBRWpCLENBRUFBLE1BQUFBLEdBRUVsQixLQUFLVyxPQUFPTyxTQUNabEIsS0FBS2EsU0FBU0ssUUFDaEIsQ0FFQUMsTUFBQUEsR0FFRW5CLEtBQUtXLE9BQU9RLFNBQ1puQixLQUFLYSxTQUFTTSxRQUNoQixrQkNyREZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3lhbF9hcmVuYS8uL2FwcC9jb21wb25lbnRzL0V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yb3lhbF9hcmVuYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5cbmltcG9ydCBTaXplcyBmcm9tICcuL3V0aWxzL1NpemVzLmpzJ1xuaW1wb3J0IFRpbWUgZnJvbSAnLi91dGlscy9UaW1lLmpzJ1xuaW1wb3J0IFJlc291cmNlcyBmcm9tICcuL3V0aWxzL1Jlc291cmNlcy5qcydcblxuaW1wb3J0IF9zb3VyY2VzIGZyb20gJy4vZGF0YS9zb3VyY2VzLmpzJ1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vc2V0dXAvQ2FtZXJhLmpzJ1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vc2V0dXAvUmVuZGVyZXIuanMnXG5cbmltcG9ydCBXb3JsZCBmcm9tICcuL1dvcmxkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBcbntcbiAgc3RhdGljIGluc3RhbmNlXG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIF9jYW52YXMpXG4gIHtcbiAgICBpZihFeHAuaW5zdGFuY2UpXG4gICAgICByZXR1cm4gRXhwLmluc3RhbmNlXG5cbiAgICBFeHAuaW5zdGFuY2UgPSB0aGlzXG5cbiAgICB0aGlzLmNhbnZhcyA9IF9jYW52YXNcbiAgICB0aGlzLnNpemVzID0gbmV3IFNpemVzKClcbiAgICB0aGlzLnRpbWUgPSBuZXcgVGltZSgpXG4gICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKF9zb3VyY2VzKVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSgpXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpXG5cbiAgICB0aGlzLnJlc291cmNlcy5vbignbG9hZGVkJywgKCkgPT5cbiAgICB7XG4gICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKClcbiAgICB9KVxuXG4gICAgdGhpcy5zaXplcy5vbigncmVzaXplJywgKCkgPT5cbiAgICB7XG4gICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlc2l6ZSgpXG4gIHtcbiAgICB0aGlzLmNhbWVyYS5yZXNpemUoKVxuICAgIHRoaXMucmVuZGVyZXIucmVzaXplKClcbiAgfVxuXG4gIHVwZGF0ZSgpXG4gIHtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGUoKVxuICAgIHRoaXMucmVuZGVyZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGI3NzM4NjZjODdlYWM4MGFlNGRcIikiXSwibmFtZXMiOlsiRXhwIiwic3RhdGljIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIl9jYW52YXMiLCJpbnN0YW5jZSIsInRoaXMiLCJjYW52YXMiLCJzaXplcyIsIlNpemVzIiwidGltZSIsIlRpbWUiLCJyZXNvdXJjZXMiLCJSZXNvdXJjZXMiLCJfc291cmNlcyIsInNjZW5lIiwiVEhSRUUiLCJjYW1lcmEiLCJDYW1lcmEiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwib24iLCJ3b3JsZCIsIldvcmxkIiwicmVzaXplIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9