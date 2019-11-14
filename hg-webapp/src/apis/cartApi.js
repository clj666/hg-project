const BASEURL='http://39.107.120.161:3000'
const CARTURL = `${BASEURL}/cars`
const FOUNDURL = `${BASEURL}/cars/found`
export default {
  /**
     * 获取店铺的信息
     */
  async getCartInfoByUserId () {
    let res = await fetch(CARTURL)
    let data = await res.json()
    return data
  },

  async getHomeData () {
    let res = await fetch(CARTURL)
    let data = await res.json()  
    return data
  },
	async getFoundData () {
		let res = await fetch(FOUNDURL)
		let data = await res.json()  
		return data
	}
}
