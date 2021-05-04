const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

// vue.config.js 常⽤配置
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            //设置“src”目录别名为“@”
            .set("@", resolve("src"))
            .set("views", resolve("src/views"))
            .set("compts",resolve("src/components"))
            .set("css",resolve("src/css"))
            .set("js",resolve("src/js"))
            .set("assets",resolve("src/assets"))
            .set("router",resolve("src/router"))
            .set("store",resolve("src/store"))
            .set("config",resolve("src/config"))
    }
}