import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入ui库
    Components({
      // ui解析器，内置了大多数流行库的解析器
      resolvers: [
        AntDesignVueResolver(),
      ],
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts'
    }),
    // 解决unplugin-vue-components引入ui库后message, notification等样式不生效的问题
    styleImport({
      resolves: [
        AndDesignVueResolve()
      ]
    })
  ],
  // 1. 引入使用less的库（例如antd）时要这么配置
  // 2. 需要先安装less `npm i less -D`
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
	  alias: {
		'@': resolve(__dirname, 'src')
	  }
  }
})
