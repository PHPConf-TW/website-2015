import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';

class Schedule extends Component {
    render() {
        return (
            <section >
                <h3>議程</h3>

                <table>
                    <thead>
                    <tr>
                        <th width="13%">時間</th>
                        <th width="45%">國璽樓一樓多功能國際會議廳</th>
                        <th width="45%">國璽樓二樓國際會議廳</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="time">09:00 ~ 09:20</td>
                        <td colspan="2" class="time">報到</td>
                    </tr>
                    <tr>
                        <td class="time">09:20 ~ 09:30</td>
                        <td colspan="2" class="time">開幕</td>
                    </tr>
                    <tr>
                        <td class="time">09:30 ~ 10:40</td>
                        <td>
                            <p><strong>微博 LAMP 優化之路 (Laruence)</strong></p>

                            <p>微博是目前中國最大的社交媒體平台，每天有近100億的訪問請求，2011年微博遭遇爆炸式增長，原有的架構遇到極大的性能挑戰。
                                兩年來，微博一直在做性能優化和系統改進工作，到目前為止，LAMP系統得到很大的性能提升，首屏時間從2012年初的3秒降低到現在的1.2秒，LAMP服務器數目卻一直在降低。
                                這其中的到底做了那些優化工作，作為領導這些優化的作者，將為大家一一道來。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a> | <a
                                href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv"
                                target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <p><strong>Building High available and scalable website on PHP from Microsoft Azure
                                (Brian)</strong></p>

                            <p>在不斷的演化過程中，提供 Pass & IaaS 服務的 Microsoft Azure 其實不只有整合微軟的技術，也完整支援由 PHP 建構的網路雲端程式。
                                本議程將介紹如何運用 Microsoft Azure 提供的服務來部屬或重新建置 PHP 網路應用程式，包含資料庫建制與專屬的 API 的使用，使得由 PHP
                                建制的雲端服務也有絕佳的執行效能以及高度延展性。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a> | <a
                                href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14"
                                target="_blank">Youtube</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">10:40 ~ 10:50</td>
                        <td colspan="2" class="time">休息</td>
                    </tr>
                    <tr>
                        <td class="time">10:50 ~ 11:30</td>
                        <td>
                            <strong>創意與專案管理的冰與火之爭 (Joe)</strong><br/><br/>

                            <p>對基層工程師而言，專案管理似乎是某種干擾工作的奇怪流程。 尤其對於創意開發的工作者而言，這兩者似乎是毫不相容的東西？
                                很多人普遍認為，創意不能被管理、更不應該被管理。
                                但實際上，好的專案管理其實是對於創意開發的一項助力，好的專案管理也應該能幫忙案子收斂並提供商業上多面向的協助。
                                這場內容我們將來探討如何讓冰與火融合，來讓案子更順利的管理要素。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XSDdIZ19UNkkyMVk">投影片</a> | <a
                                href="https://www.youtube.com/watch?v=6HWpLFHuBwQ&index=1&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv"
                                target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <strong>選舉黃頁開發經驗分享 (Kiang)</strong><br/><br/>

                            <p>選舉黃頁主要是希望解決中選會資料混亂以及資料不夠即時問題，主要使用 CakePHP 搭配 MPTT 樹狀結構去實做。</p>

                            <p><a href="http://k.olc.tw/elections/" target="_blank">選舉黃頁</a><br/>
                                <a href="https://github.com/kiang/elections" target="_blank">Github</a></p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XMGd4WnJWQjhZQVE">投影片</a> | <a
                                href="https://www.youtube.com/watch?v=nyhyVonIGoc&index=9&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv"
                                target="_blank">Youtube</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">11:30 ~ 12:30</td>
                        <td colspan="2" class="time">午餐</td>
                    </tr>
                    <tr>
                        <td class="time">12:30 ~ 13:20</td>
                        <td>
                            <p><strong>whoscall 的 MongoDB 使用經驗 (ReinySong)</strong></p>

                            <p>MongoDB 從前年年底開始陪伴 whoscall 到現在，過程有血有淚，除了分享 MongoDB 的使用經驗外也會分享採用 MongoDB
                                的重點。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XamJ6X0NySXhZdnM">投影片</a> |
                                <a href="https://www.youtube.com/watch?v=Ws0vDk2q078&index=3&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv"
                                   target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <strong>Framework or Framework Less (蒼時弦也)</strong><br/><br/>

                            <p>Framework 可以幫助我們快速的開發網站，但是被「框架」限制住的我們，能夠突破這個框架，做出更多的變化嗎？運用 Composer
                                讓我們在「套件菜市場」中，尋找適合自己的「零件」然後建構一個能夠對應 Framework 無法適用的簡易型框架。</p>

                            <p>這場演講將會分享怎麼運用 Pux, idiorm/pairs, twig 等套件，組合出 MVC 的架構，卻能夠在需要的時候隨時置換對應各種情況。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XUENJVmdBV0dqbE0">投影片</a> |
                                <a href="https://www.youtube.com/watch?v=aVQf1VS7H3I&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=7"
                                   target="_blank">Youtube</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">13:20 ~ 13:30</td>
                        <td colspan="2" class="time">休息</td>
                    </tr>
                    <tr>
                        <td style={{'text-align':'center'}}>13:30 ~ 14:10</td>
                        <td>
                            <strong>PHP Extension 開發實務 - 補齊 PHP 遺失的 $_PUT 與 $_DELETE
                                (FirchTsai)</strong><br/><br/>

                            <p>以 EPV 實例帶領會眾瞭解 PHP Extension 的開發動機、架構與成果。並延伸探討 PHP Extension
                                應用於產品中的實務案例。</p>

                            <p>EPV : Extra Predefined Variables for PHP，用來補齊 PHP 遺失的 $_PUT 與
                                $_DELETE
                                (<a href="https://github.com/tronice/epv" target="_blank">github</a>)
                            </p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8Xc0tKUGxOejFibzg">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=C7e2S4rhAb8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=6"
                                    target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <p><strong>Scalability in Mind - 當老軟體Drupal遇上大架構 (Jimmy
                                Huang)</strong></p>

                            <p>Drupal 本來僅針對 Single Server Hosting ，如何在現今擴展性的需求不斷提高下，逐步調適演進？本主題將由
                                Drupal 的演進陣痛，談談 PHP 專案開發時如何為 Scalibility 預做準備。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XMkNNWDJmR1J6MDQ">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=-M9Z0mRETNc&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=12"
                                    target="_blank">Youtube</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">14:10 ~ 14:20</td>
                        <td colspan="2" class="time">休息</td>
                    </tr>
                    <tr>
                        <td class="time">14:20 ~ 15:00</td>
                        <td>
                            <strong>Phalcon 進行式 (SDpower)</strong><br/><br/>

                            <p>使用phpalcon framework開發該如何上手以及架構與使用。
                                內容包含使用方式ORM, Template Engine (Volt),DI ,Events Management
                                ,Encryption ,HTTP Request ,Response ,Cookies。 </p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XRGt3a0JTblVIMmc">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=MhBX0gHs9zU&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=5"
                                    target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <strong>運用 Docker 部署PHP專案 (Fntsrlike)</strong><br/><br/>

                            <p>
                                Docker是這一年來虛擬化環境的新秀，以LXC技術展現輕量型虛擬化，並且擁有自動建構、版本控制的特性，配合Docker
                                hub平台，讓我們能夠快速部署伺服器環境與專案。而這個連Google、Red
                                Hat都很是重視的LXC管理工具，該如何運用在PHP的專案上呢？就讓我們一探究竟吧！</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XUElYbG9GTDBsTWc">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=Y5Gvk0mutZ4&index=13&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv"
                                    target="_blank">Youtube</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">15:00 ~ 15:30</td>
                        <td colspan="2" class="time">下午茶</td>
                    </tr>
                    <tr>
                        <td class="time">15:30 ~ 16:00</td>
                        <td>
                            <strong>Building Powerful command-line application
                                with PHP (c9s)</strong><br/><br/>

                            <p>CLIFramework is a command-line application
                                framework, for building flexiable, simple
                                command-line applications.</p>

                            <p class="slide"><a
                                href="https://drive.google.com/file/d/0B-59_4gDCY8XWkFOVExhUFlQbms/view?usp=sharing">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=_wAaMIw3ip4&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=2"
                                    target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <strong>HTTP accelerator - Varnish 應用
                                (Ninja)</strong><br/><br/>

                            <p>在大型網站上，透過 Varnish 機制加速網頁伺服器回應速度的實際應用場景，包含
                                cache 應用，多 domain 轉址及手機來源判斷機制等相關應用</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8Xc1c5S1BxSDhWSGc/view?usp=sharing">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=-HUn54RF-tI&index=11&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv"
                                    target="_blank">Youtube</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">16:00 ~ 16:10</td>
                        <td colspan="2" class="time">休息</td>
                    </tr>
                    <tr>
                        <td style={{'text-align':'center'}}>16:10 ~
                            16:50
                        </td>
                        <td>
                            <strong>實戰 HHVM Extension
                                (Ricky)</strong><br/><br/>

                            <p>HHVM 是 Facebook 開發的一個高效能 PHP
                                虛擬機用來取代行之有年的 Zend Engine。
                                但是，在獲得更高效能的同時也意味著原本 PECL 上的大量
                                Extension 必須一一改寫。
                                藉由這個議程可以了解到如何透過 HNI 界面，混用 C++ 以及
                                Hack Lang。</p>

                            <p>在效能以及開發速度上取得平衡，撰寫出屬於自己的 HHVM
                                Extension。</p>

                            <p class="slide"><a
                                href="https://drive.google.com/file/d/0B-59_4gDCY8XVlZzTnZDTUdUUTQ/view?usp=sharing">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=MdSRbgQgPCk&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=4"
                                    target="_blank">Youtube</a></p>
                        </td>
                        <td>
                            <p><strong>MySQL 的效能救贖：Percona
                                XtraDB Cluster (Nekobe)</strong>
                            </p>

                            <p>當使用者成長，系統效能不足時，我們能怎麼辦?
                                瓶頸在 AP Server時，我們可以用 PHP
                                Accelerator，可以多一台 Server 做 DNS
                                Roundrobin
                                可以改變 httpd 與 php 的架構，可以使用 Proxy
                                技術....etc</p>

                            <p>那 MySQL 資料庫呢？
                                讀寫分離必須改變程式，分析schema最佳化Query曠日費時....</p>

                            <p>Percona XtraDB Cluster
                                是改程式之前的最後救贖。</p>

                            <p class="slide"><a
                                href="https://docs.google.com/file/d/0B-59_4gDCY8XNTlKaGpTMWppMUk/view?usp=sharing">投影片</a>
                                | <a
                                    href="https://www.youtube.com/watch?v=IComMUapZZU&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=10"
                                    target="_blank">Youtube</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="time">16:50 ~ 17:00</td>
                        <td colspan="2" class="time">閉幕</td>
                    </tr>
                    </tbody>
                </table>

                <div class="notice">
                    <p>若因不可預測之突發因素，主辦單位保留議程及講師的變更權利。</p>
                </div>
            </section>
        );
    }
}
;

export default Schedule;
