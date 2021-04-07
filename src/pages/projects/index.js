import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import "./style.css"

export default function Hairmap() {
  return (
    <>
      <Box as="body" className="body">
        <Box as="heard" className="main-heard">
          <Flex className="wrapper d-flex">
            <img
              className="logo"
              src={require("./images/logo.png")}
              alt="sss"
            />
            <li className="heardtext">
              <a href="">找髮型</a>
            </li>
            <li className="heardtext">
              <a href="">找設計師</a>
            </li>
            <li className="heardtext">
              <a href="">美髮誌</a>
            </li>
            <Box className="hiddenbox"></Box>
            <li>
              <a href="">註冊</a>
            </li>
            <li>
              <a href="">登入</a>
            </li>
            <li>
              <img
                src={require("./images/setting.png")}
                alt=""
                className="setting-img"
              />
            </li>
          </Flex>
        </Box>
        <Box className="nav navimg">
          <Box>
            <Box>
              <img
                className="imgbox1"
                src={require("./images/logo_icon_g.svg")}
                alt=""
              />
              <h1 className="imgbox1 h1">煩惱髮型嗎</h1>
              <h3 className="imgbox1 h3">給你最多髮型靈感及在地優秀設計師</h3>
              <Box className="navbox d-flex">
                <li className="icon">
                  <img
                    className="iconhig"
                    src={require("./images/icon_searchbar_location.png")}
                    alt=""
                  />
                  <p className="borderbox-pp">找地區</p>
                </li>
                <Box className="borderbox"></Box>
                <li><p className="borderbox-pp borderbox-pp-view">搜尋髮型主題</p></li>
                <Box className="borderbox2"></Box>
                <Flex className="iconimgback d-flex">
                  <li className="icon">
                    <img
                      className="iconhig iconhig2"
                      src={require("./images/icon_searchbar_search.png")}
                      alt=""
                    />
                    <p className="borderbox-pp borderbox-pp-view">去逛逛</p>
                  </li>
                </Flex>
              </Box>

              <Flex className="iconback d-flex">
                <Box className="mediaicon1">
                  <img src={require("./images/icon_search.png")} alt="" />
                  <Box className="navtextbox">在地設計師作品輕鬆找</Box>
                </Box>

                <Box className="mediaicon1">
                  <img src={require("./images/icon_fashion.png")} alt="" />
                  <Box className="navtextbox">
                    流行髮型
                    <br />
                    一手掌握
                  </Box>
                </Box>

                <Box className="mediaicon1">
                  <img src={require("./images/icon_book.png")} alt="" />
                  <Box className="navtextbox">即時溝通預約</Box>
                </Box>
              </Flex>

              <Box className="asidetop wrapper">
                <h1>熱門主題</h1>
                <Box className="wrapper d-flex box4-1-img box4-2">
                  <Box className="wrapper d-flex box4-1 box4-1-img box4-2">
                    <img src={require("./images/22736_8.jpg")} alt="" />
                    <img src={require("./images/9743_2.jpg")} alt="" />
                  </Box>
                  <Box className="wrapper d-flex box4-1 box4-1-img box4-2">
                    <img src={require("./images/3425_14.jpg")} alt="" />
                    <img src={require("./images/14366_18.jpg")} alt="" />
                  </Box>
                </Box>

                {/* <Box className="box4-2 d-flex">
                  <Box className="d-flex">
                    <p>韓系染燙</p>
                    <p>咖啡系</p>
                  </Box>
                  <Box className="d-flex">
                    <p>型男</p>
                    <p>男孩髮型</p>
                  </Box>
                </Box> */}
                <button className="btn btn-block d-flex">more</button>
              </Box>
              <Box className="asidetop wrapper">
                <h1>趨勢話題</h1>
                <Flex className="box4-2 wrapper d-flex">
                  <img src={require("./images/128141.jpg")} alt="" />
                  <img src={require("./images/138974.jpg")} alt="" />
                  <img src={require("./images/141965.jpg")} alt="" />
                </Flex>
                <Flex className="box4-3 wrapper d-flex">
                  <h5>鬆感的劉海!配上極捲的捲度!反而...</h5>
                  <h5> 日系鬆鬆捲度 吹乾即可霧面髮色 </h5>
                  <h5> 歐爸新寵，括號瀏海你跟瘋了嗎? </h5>
                </Flex>
                <button className="btn btn-block d-flex">more</button>
              </Box>
              <Box>
                <Flex className="store wrpaaer d-flex">
                  <img
                    className="storeimg "
                    src={require("./images/phones.png")}
                    alt=""
                  />
                  <Box className="storetext">
                    <h2>快速找到好髮型</h2>
                    <img src={require("./images/btn_app_ios.png")} alt="" />
                    <img src={require("./images/btn_app_android.png")} alt="" />
                    <h5>下載並註冊就可以開始發表作品囉!</h5>
                  </Box>
                </Flex>

                <Flex className="stoertab d-flex">
                  <Box>
                    <p>已有</p>
                    <p className="stoertabsize">635</p>
                    <p>位設計師</p>
                    <p className="stoertabsize2">優秀設計師募集中</p>
                  </Box>
                  <Box className="textA"></Box>
                  <Box>
                    <p>發表</p>
                    <p className="stoertabsize">6421</p>
                    <p>張髮型作品</p>
                    <Flex className="textti4 d-flex">
                      <button className="textti4">了解更多</button>
                      <br />
                      <button className="textti4">立即免費註冊</button>
                    </Flex>
                  </Box>
                </Flex>

                <Flex className="footlist wrapper d-flex">
                  <Box className="footlistlogo d-flex">
                    <img src={require("./images/logo_icon_g.svg")} alt="" />
                    <p>
                      Hair Mpa美髮地圖團隊致力於打造出最貼心實用的美髮資訊交流
                      社群，讓美髮時光成為每個仁生命中的美好時刻。
                    </p>
                  </Box>
                  <Box className="footlist1-1">
                    <Flex className="d-flex">
                      <img src={require("./images/email.svg")} alt="" />
                      <br />
                      <p>聯絡我們</p>
                    </Flex>

                    <Flex className="d-flex">
                      <img src={require("./images/facebook_g.svg")} alt="" />
                      <p>粉絲專業</p>
                    </Flex>
                  </Box>
                  <Box className="footlist1-1">
                    <Flex className="d-flex">
                      <img src={require("./images/ios.svg")} alt="" />
                      <br />
                      <p>IOS</p>
                    </Flex>
                    <Flex className="d-flex">
                      <img src={require("./images/android.svg")} alt="" />
                      <p>Android</p>
                    </Flex>
                  </Box>

                  {/* <Flex className="btnimg d-flex">
                    <img src={require("./images/btn_join.png")} alt="" />
                  </Flex>
                  <Box className="h666">
                    <h6>設計師加入</h6>
                  </Box> */}
                </Flex>
                <Box className="footerbot">
                  <p>
                    Hairdodo &copy .Inc 2016. All Rights Reserved
                    使用者條款與隱私政策
                  </p>
                </Box>
              </Box>
              <Box>
                <button className="btnbottom"></button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
