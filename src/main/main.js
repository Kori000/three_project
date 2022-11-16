import * as THREE from 'three'

// 初始化场景
const scene = new THREE.scene()

// 初始化相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)

// 设置相机位置
camera.position.set(-50, 50, 130)

// 更新摄像头宽高比
camera.aspect = window.innerWidth / window.innerHeight

// 更新摄像头投影矩阵
camera.updateProjectionMatrix()

// 添加相机进场景
scene.add(camera)

// 初始化渲染器
const renderer = new THREE.WebGL1Renderer({
  // 设置抗锯齿
  antialias: ture
})

renderer.outputEncoding = THREE.sRGBEncoding

// 设置渲染器宽高
renderer.setSize(window.innerWidth / window.innerHeight)

// 监听屏幕的大小修改渲染器宽高和相机比例
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth / window.innerHeight)
})

// 将渲染器画布放入页面
document.body.appendChild(renderer.domElement)

// 渲染函数
function redner () {
  // 渲染场景
  renderer.render(scene, camera)
  // 引擎自动更新渲染器
  requestAnimationFrame(render)
}
render()

