(this["webpackJsonphp-configurator"]=this["webpackJsonphp-configurator"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),o=s(9),n=s.n(o),a=(s(35),s(36),s(4)),r=s(3),l=s(6),h=s(5),m=(s(37),function(e){return e.children}),j=(s(38),s(0)),d=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).slide=function(){console.log("sliding")},e.tilt=function(){console.log("tilting")},e.showPorts=function(){console.log("showing Ports")},e.showGsyncTech=function(){console.log("showing Gsync Tech")},e.showFirstImg=function(){console.log("Showing first img")},e.showSceondImg=function(){console.log("Showing sec img")},e.showThirdImg=function(){console.log("Showing third img")},e.showFourthImg=function(){console.log("Showing fourth img")},e.showFifthImg=function(){console.log("Showing fifth img")},e}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"sceneContainer"})}}]),s}(c.a.Component),b=(s(40),s(41),s(20)),p=s.n(b),u=s(21),O=s.n(u),w=s.p+"static/media/tilt.482db871.svg",N=s.p+"static/media/slide.fa62e0e6.svg",I=s.p+"static/media/PLUS_WITH_CIRCLE_ICON.3cf6e6b7.svg",g=s.p+"static/media/MINUS_WITH_CIRCLE_ICON.66f9e005.svg",v=["NVIDIA G-SYNC Technology","1440p Resolution","Nano Ips Panel Technology"],x=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).handleClick=function(){i.setState({isOpen:!i.state.isOpen})},i.itemList=function(e){var t="subFeatureContainer",s=I;i.state.isOpen&&(t+=" opensubFeature",s=g);var c=Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"dropdown__item_features",children:[Object(j.jsx)("img",{src:s}),Object(j.jsx)("p",{onClick:function(){i.setState({isOpen:!i.state.isOpen}),i.props.showGsyncTech()},children:v[0]}),Object(j.jsx)("div",{className:t,children:Object(j.jsx)("p",{children:"Get in the game with the latest NVIDIA\xae G-SYNC\xae Compatible displays. Each displays is validated by NVIDIA to bring you smooth, variable refresh rate (VRR) gaming experience that eliminates tearing, stuttering, artifacts, and flicker at refresh rate up to 165Hz. So you get the competitive edge you need, backed by performance you can trust."})})]},v[0])});return Object(j.jsxs)("div",{className:"dropdown__items_features",children:[" ",c," "]})},i.state={isOpen:!1},i}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.props.showList,s=Object(j.jsx)(p.a,{className:"plusIcon"});return t&&(s=Object(j.jsx)(O.a,{className:"plusIcon"})),Object(j.jsxs)("div",{className:t?"exploreContainer active":"exploreContainer",children:[Object(j.jsxs)("div",{className:"exploreTag",onClick:function(){e.props.toggleList()},children:[s,Object(j.jsx)("p",{children:"Feature"})]}),this.itemList(this.state.isOpen)]})}}]),s}(c.a.Component),S=(s(47),[["Slide",N],["Tilt",w],["Ports","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA2CAYAAAAxpDyoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTExLTI1VDEzOjQwOjA5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMS0yNlQyMTo1Njo1NyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMS0yNlQyMTo1Njo1NyswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OGYxNjA0Zi1kMmNlLTFlNDctODdkYy1mNTFlMzdlMDk5YWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjMGJiZGQyMC0yODkyLWJmNDYtYWE3Ny0wYjk4NjUyZDc4Y2YiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0Zjk0YzczZi01ZDVkLTY5NGYtYjdjNy0zMzUyNmRhNmM3ZGYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRmOTRjNzNmLTVkNWQtNjk0Zi1iN2M3LTMzNTI2ZGE2YzdkZiIgc3RFdnQ6d2hlbj0iMjAxOS0xMS0yNVQxMzo0MDowOSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NjkxOTBjYy0zMTQ2LTZmNGQtOWRjNC1mYzM3Mzg3ZGRkOTMiIHN0RXZ0OndoZW49IjIwMTktMTEtMjVUMTQ6Mzk6MjYrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjhmMTYwNGYtZDJjZS0xZTQ3LTg3ZGMtZjUxZTM3ZTA5OWFjIiBzdEV2dDp3aGVuPSIyMDE5LTExLTI2VDIxOjU2OjU3KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mY+8tAAAG0JJREFUeJzNnElwW2e233/3XswziJkEQYKTOGnw1B5lWnLkLrVsl6vcTr1UFp0s3iqLXrsqi84i2aSSVFLvVeolm/eSVKXbbXfbcqvreZDcFklLTcuaRYriLHECQYAYiBm4yEK61yAEUiTFTnKqbhG4uMP3nf935vNR+NWvfrVUrVat1FC1Wt3yWfkuiiKiKPL1118jyzKnTp2iXC6TyWTU39LpNJIkYTKZANBqtYyNjZFOpzlz5gwOh4NYLAaAIAjshwRB2DLGJ5HVauX69eusra3x0ksvkU6nH3u31Wrlxo0bABw9epR0Or2vsdWT2WxmbGyMgYEBotEodrv9X5w8efJ3Cg/qSQM015+snXDtwCuVClqtlrfffpvz58/z2Wef8eabb+J0OkkkEgiCQDabxWg0IooipVIJQRAYGhri2rVrfPLJJzz//PM888wzJBIJisViQ1CUc/VM3+l8I4CUxSQIAqVSCZPJhCzLDRlRqVTQ6XQUCoU9gf0k0mg0VCoVYrEYZrOZpaWl45lM5nebm5sNrxer1WrDpdCIUaIoks/nyefznD59mv7+fv74xz8yNzeH2+2mUqkQCARwOBwqGOVymUQiwXPPPcerr77K9evX+fTTT9FoNDidzoYMqpXKRufrJXi7ZygkyzLZbBaDwUCpVGrICFmW0Wq1lMvlAwVElmV0Oh3xeBy3200ikehbXFwkmUw2PMTdPLQWHIXJsViMF154gVOnTnHlyhVGR0dxOp3qalTuUf6ur6/jdrs5c+YMoijy0UcfMTs7i9frRZKkLcxuxPR6Ju10rva8KIpsbm6STCaxWCxUKpWGc1Qk6aABKRaL2O12crkcVqsVSZJC8XgcSZIaXr8rQIDHGCwIAtFolJaWFt5//302NjY4d+4ckiRhtVofW7UKY3K5HENDQxw7dozh4WG++OILTCYTVqtVZYpCtSpHUUt7BUer1bK6ukq5XMblcqmANALcZrOpTNyvfaunUqmE3W5HkiQEQcBqtQbL5bLObDaj1+sfO3YNSC3VgpLNZjGZTLz33nt4PB7Onj2rSkM9KIIgIMsy6+vrhEIhTp8+TTqd5te//jWRSASPxwM8biPqGb4dOI2AMRgMrK+vo9VqMRqNj10vCAIOhwOj0ciDBw+IRqNb5vi0JMsyVqsVrVZLPp/HZDJZM5nMIUEQqFQqjx2anR5Wbyzrjb0sy2g0GgqFAoVCgRMnThAIBLhw4QIDAwM899xzxONxdVWKooher0cQBPL5PNVqlVOnTjExMcEXX3xBd3c3r7/+Otlslmw2+5iqVBgoy7IqNQpja8elfK5Wq6rdq1VXiuTY7XY2NzeZmppidXVVXUClUgmNZkfW7ImMRiPlcplUKoVWq6VYLB51OBy3GqnGHd/a6IbaCUuSRD6fV89Ho1EOHTqEw+Hgyy+/JBaLMTQ0RLlcJp/PIwgC8/PzVCoVTCYTPp+PeDxOb28vPp+Py5cv89vf/paTJ0/idrtZX1/foq7qSWFgvZqrpWKxiCiK2Gw2crkcRqNR8Xa4evUqsiwzOzuLIAi89dZbKAbX4/Fsa2/2SpIkUSqV2NjYwGg0srKyclSW5f9VLpcfu1Z8WgNWu1IlSSIajeJ0Ovnggw+QJImzZ8+yublJU1MT9+/fB8But5PJZFheXkav1xOPxzEYDPzsZz/D7XZz9uxZrl27hs/nQ6vVqoypX/21VCsltXGT4l63tbVhNBpZXl7mu+++4/79+zgcDmRZJhQK8e6773L79m0WFxepVqvbGt39kkajIRaL4XK5yGazR2RZxmg0YjAYthzS0NDQh4B+Lw+vVyW1JIoihUIBgMOHD1Mqlbh06ZJq7K1WK36/n2q1ytraGh6PR1V7uVyOnp4eHA4H165dY35+nq6uLkwmE7lcbtt3bkdGo5HV1VWWl5cpFotMTEywtrbG+Pg4breb1157DYPBoAa309PTxONxenp6sNvt27rIeyXFoUmlUvT19fHgwYNKOBz+G5vNhiRJaLVa9dgXINsFbLXfK5UKmUyG7u5uPB4PV69eJZlM4vV6yWazTE9PYzKZSCaTFAoFNY5Jp9M4HA4OHTrE4uIiV65cwe1209LSQjabVZ/fKHCtH4/VamV6epq7d+9is9nw+/2kUik1Ep+bm+PQoUOMj49z7949XnnlFcxmMxqNBo/HQ7FY3AtbduSXIAhEIhF6enqIRCIGjUbzH00mUzmTyag2uFAoPL2EbHdOUWWbm5u4XC46OztZXl5mdXWVYrFIU1MT/f392O02VleXSSQe6m1RFMnlclQqFfr7+xEEgZGREUqlEj09PRSLRSqVSkPbUj8Gk8nEnTt3aGtrY2hoCL1eT7lcplKpMDc3x9LSEqVSCZvNxokTJ3jttdeIRqMkEgmam5sPDBD4UVqbm5vJZDK6crnyu6amptVsNku5XFYPcbtg7KBIkiQ1v3X69Gmam5u5c+cOS0tLZLNZHI4mnn32OTQaibm5eTQaDQaDgUqlwtraGj09Pbz11ltMTU1x9uxZDAaD6jHtFBiKokgmk2FjY4Pl5WXVfhmNRq5evYrFYuHNN9/kpZde4tSpU1gsFpaWlh66ngfoYSnjUmxEPp9Hp9ORSCSOKIFo7bEvCdmOGkkJPNSh1WqVTCZDZ2cnwWCQO3fucPPmTex2O1arDavVxq1bt5ifn8Pr9WE2W6hUymSzWcxms6J7uXLlCsFgEK/XSyaT2fbdSrJzdnaWRCKBTqdjfHycyclJfvrTn/LGG2/g9/vJ5/Ok02k1xZFIJMhms/h8vgOzIQB6vZ61tTWMRiMajYZoNDrf09PzRaFQUKVdEISDBaQRKWpFiR0ymQxOp5Pe3l7W19e5evUqWq2W5eVlRFHE6/WSTCbIZjO4XG6gSj5foFKpMDAwQD6fZ3h4GIvFQnt7e0O7IoqimpsKBAKsr69jMpnQaDSEw2FefvllVlZWVJddFB/Gx4o0JxIJ/H7/gQOysrJCpVKhtbWV6enpdDAY/J+KpCuH9Prrr6uAHER0uhv7UiwW0el0DAwMAHDlyhUqlQonTpygv78fs9lEJLL6yE10I0mS6gl1dXXhcDgYHR0lk8nQ09NDpVJR82e1AaRiq9ra2picnGR2dpYjR46oz6sdmyAIaDQa0uk0sVgMv99Pozhhv6TRaIjH4ySTSQ4fPsz8/Hypubn5b+12OxqNBp1Oh06n2wpIPRPrc0u7oSfZodrnZbNZOjs78fl8TE1Ncfv2bSwWM263l+bmFhKJDRYWHsYLNptNjSs8Hg/hcJgbN24wMzOzxTWufb4Spet0OsLhMKIo4vP5toyz9npJkigUCkQiEbxe757mvRuSZZlIJEJfXx+RSMTo9/v/czAYLEmS9GMcsh0g29HTFJVqPyurb3NzE4/HQ29vL8vLy1y6dBmj8aHxkyRJTaMkk0k2Nzdxu93k83lEUWRwcJDl5WXGxsbw+/0EAgHVrijSIooixWIRWZbp6OhQc0a1Y6rV4ZVKhQcPHuB2u1VVdlBkMBhYXV2ltbWVZDKpkyTpU5/Pt5zNZtVxScePH/9QEIR92ZAnuZ2Nrq//rKxirVbLkSNHALh48SI6nQ6NRoPD4VDrGPl8nng8riYhM5kMAwMDyLLM8PAwer2ejo6OLUFk7buU4pMoio+NpXY88/PzOJ1ODAbDgXieyrONRiNra2u43W5lkY0Gg8EbyWSSYrFIsVh8XEIOKsu5l4EqwBaLRTo7OwkEAiwsLLCyskJTUxMDAwO0trbicrnY2NhgdnYWp9OJVqsllUrR0dGBx+NhZGSEVCql2pVGkrDdu+HH5Of8/DwmkwmbzfbU+azadxoMBqLRqOpgrK6uLnR0dPxjJpNBlmVkWX48/f6XjEnqB1j7XQnYotEooVCIkydPYjKZuHTpEj/88AMLCwvMzMxQKpVIJpOsra1hMBjQaDSsra3hcrl47733WFpa4uzZs2g0GrUuo9jC+nxXbb0FHup4g8GgBqcHnc9S3hOPx/F6vRSLxcFUKrVlPDsqyb80OLUDVfS3JEnE43G0Wi3vvPMOAwMDjI2Nsba2hlarpVAo8OKLLyJJEjMzM1SrVdU7kmWZd999F71ez8cff0wymcTlcqmrrx6YRjV6URTRarVbqp5PM69akmUZURSJx+M0NTWh0+lCiqPhcrlwuVw/RupPooMEZjvXuFaPFwoFisUix48fZ2hoiNnZWcbHx/F6vQ+TcJJELBZTjb8gCBQKBdLpNCdOnKCnp4fPPvuM6enpLR5To7pJ/RwV2/E0gDS6t1QqYbVa1S4ds9nckkgkjJVKRbUhqoQ0qmk/qdHgoKWnXsdXKhXW19fp6enh+PHj5PN5vv/+ezY2NtBqtXR0dGAymbbEFLIsE4vFOHr0KG+88QYXL17k0qVLNDU1odFo1BrKdrUeAJ1Op67mp51HLZXLZZqamoCH3qXBYDCtr6/3l8tlcrkcuVzuySXc3TD+IAFSJEWWZbW2HY/HsVqtvP/++wQCATXlEgqFKJVKj3l6giCwvr6O3+/nnXfeYWZmhnPnzmEwGDCbzVtKy/U2RUmhKOmegyRZlrFYLOj1ejY3N5Wy7lG9Xo8kSUiStLea+m6Zvh1AuwWsVn0BaiyRy+U4ceIEvb29nDt3jmvXruFyuTCZTA8bBB6lTJTPiUQCjUbDO++8gyzLfPzxx+TzeZxO55bkZO2YyuUyer1etTl7pSepOY1GowJiMplYX18/ms1m1fYqUdGXe1VFe5GGRsDsZmK1rqmiZ2OxGIODg7z99ttMTU1x4cIFNjc3icfjzM3NMT09zcrKCgaDAa1WqwaWp06doq2tjU8++YTFxUU8Hk9D4670CeynHageDOXZOp0Ou92uuurValWNp2RZPizLMmazGaPRiBQOhz9sbW3VV6vVJ3oWewn8DorqPSElrW6z2RgcHGR2dpbR0VECgQBdXV3YbDZWVlbUzhelGzGXy9HZ2YnFYuH8+fPo9Xo6OzvJ5/NbmiY0Go0K8F7zWbXzr1QqmM1mRFFkaWmJ8fFxbt68STAYpFQqEYvFeOaZZ5iamipZLJa/USqXkslk+nB6elrv9/vxeDxqN8jTMv8gwalNbcCPKqxcLjM4OKj25ep0Orq7u3E4HCSTSRYXF7Hb7VgsForFItlsFr/fTzAYZGRkhHQ6TW9vL5VKhXK5/DD9LUkUi0VWV1fVjMBux1hLRqORWCzGn//8ZwwGA5FIhEwmQyKRUF317u5uFhcXjSaT6T+53e6yLMtIv/jFLz5MJpP6a9eukUgkCIfDGI1GtUtkrwPZ7zW7pVo1prSItre34/V6uXz5MgsLC4TDYdrb25Ekibt371KtVtWGhlwuh91up7u7m2vXrrGwsEBfX58KhGLM79+/j9vt3lVw2Gh+drudK1euUCqV+OCDD8hkMlgsFvr6+vjmm2/I5XK88sorLC0taYHf+/3+lUKh8NCo/+QnP+H1118nkUjw+9//nunpaVwul+r+7UR79cIOgmpBEUWRaDSKy+Xi/fffRxRF/vCHPzA9Pa3ahNqoWxRFlOj47bffplqt8tFHHyHLMg6Hg3K5jE6nAx7mvvbr+hYKBbUBT2nUi0ajOBwOTp8+TTwe5969e3i9XtbX14/KskypVEIKBoP/zul0YjKZ6O7uRhRFbt++zdzcHIFAALfbTS6Xa9gD9SSG7ff33VC9ClMkenBwkEqlwvnz5wF44403sNvtahpep9OpQWS1WqWvr490Os23335LMBjE5/NRqVTUfJbdbn9iPmu7QLdcLrOxsYHf71dbWkVRJBAI0NHRwcWLF0mlUthstsW2trY/lstlJK/XG56cnDxmtVqxWCw4nU7C4TCJRILr16+TTCYJh8Po9frH1Nj/L+Aoz6lUKmSzWTo6Omhvb2dyclLtP85kMkSjUZUpTqeTYrFIPp+nq6sLnU7HhQsXcDgc9PX1cfPmTbRaLR6PZ1vDXu+e15KSVU4kEjidTsxmM9FoVM2/mc1m/H4/IyMjRKPR9EsvvfQ/AKRf/vKXn1YqlW+uXr16bGlpKdDc3Ixer1ezq/Pz89y4cQOj0Uh7ezulUkk1gHth7l8KmHr3WCkTNzU10dnZyezsLCMjI7jdbjweD1qtllgsRiqVUqVhc3OT1tZWPB4PX3/9NQ6HQ3WZd6qtP2nMyrssFgtNTU1EIhE0Gg1+v594PI7FYmFwcJD5+XnP559//rvvvvsuJr366qv09PQstLW1/V00Gt24devW8Xw+r/P5fJhMJrq6uqhWq4yPj7OwsEBLSwsul4tcLretN/b/ChiFFBUmSRL9/f1Uq1Xu3r2Ly+Xi6NGjqgek1PeVnV8ej4dgMMjY2NiWuTZqB9rNOE0mE4uLi1gsFjweD5FIhNXVVfr6+tRUySMe6y9cuPCLVCr1B+nkyZNkMhkMBgPHjh37s8Fg+Pvp6WnT3bt3XzCbzdhsNrxeL62traytrXHr1i2SySTd3d1oNJonemPb/fY0oO3mPkWF5fN5Dh06hNlsZnR0lKWlJbq7u9WtZpFIhKamJiwWixrfhEIhfvjhB1wuF4FAQO3E3Ov4zGYz09PT5HI5tZV1YmKCarVKR0cH6XSaYrFItVrF7XbrnU7nP5NOnjypphxSqRRer3ezv7//XCaTuTA+Ph5+8OBBu8fjwWq10t7ejsViYW5ujjt37mA0Gmlra6NUKqnNa3tl8H7u2YkaVQLT6TShUEhVYcPDw8TjcYLBIA6Hg3w+r8YdStSs1Oj9fv8WCdnLuJStCLdv38blctHU1ITZbOby5cvYbDZaWlrI5/NqnHL8+HGDdPLkyS2BVz6fJ5fL0dXVdd/lcv1DKpV6cPv27eeTyaTN5/PhcDjo7OykUCgwPj7O/fv3d6XGdprQXwKUehVWKBSQJInBwUEymQzz8/McO3aM559/HrPZTLFY5MGDBzidTrWHqlQqPWZD9jKmUqmk7hC7ePGi2pxhMpm4ePEiVquV1tZWZFlmeXkZrVab3gKIQkpTW6VS4cUXX7wmiuLfPXjwQJicnDyu0Whwu90EAgGCwSCRSISbN2+STqfp6upSN6YclFQ8bU2ithqobIsYHBzE4XDw7bffsra2Rjgcxm63E41GGR8fVz2rZDJJc3OzCshexyIIgqqutFotw8PDmM1m+vv7sVqtDA8PYzAYOHToELOzs4iiWHwMkNoATimamM3mUl9f3/lCofD7mZkZ/+zsbJ/T6cTpdNLe3o7ZbGZ2dpaJiQkMBgNtbW0UCoUd1dh2EzxoUJT7a+eYyWQIhUKEQiEmJyf5/vvvEQQBv9+PIAhYrVYKhQIbGxsEAoFtvcrdvjubzdLW1obFYmFkZARJkjh8+LDaX6bT6TCbzWxsbGwPiJJsNBgMZLNZ0uk03d3dkVAo9Ju5ublb8/PzR2KxmMfn8+F2u9VuD8UbC4VCOJ3OLZ2FOw16p+9Pun+vDBKEhxtTLRYLvb29bGxscPfuXVpbW3n22WfJ5XJks1nW19fVPq6npUwmowaew8PD5PN5jh07htvtZmxsjOXlZRwOx5MB0ev1qlFTOs/D4fCE0+n826mpKe38/PyrsiyLLpeLlpYWWlpaWFxcZHx8nFwuR0dHh7rTars0hPCQU48xrhEzD4rK5TKlUoliscjg4CB6vZ7R0VFSqRRdXV2USiXu37+P3+9Ho9HsK+1TX6vPZrOqa3358mWSySRHjhzB5/Nx48YNIpHI7gFRMpTVapVYLIbdbufw4cMXNjY2/vfExIQ3FosNGo1G3G43nZ2d6PV67t27p+4DCYVCO6qxelAagqR+2DswtWpLORSGKYFhe3s7169fZ25uju7ubrUneKd/OLAdNepXU9SX4hiNjY0Rj8cZGBigq6trdyqrFhBlP7lSWn2UQIt3dnZ+vL6+/sONGzcO5XK5ZqfTSSAQIBwOk0qlmJiYUPdGOJ1OctnsExm+HfOVb1X15/2lb2qBUdp+TCYTR44cYXl5mTt37pBMJmlpadlxf3sjqm2kaKSO8/k8RqORwcFBRkdHmZ6eVnrP9gdIoVBAo9GomdNqtUpXV9c9nU733xYWFrJTU1MvAAafz0drayuBQID79+8zMTFBvlCgs7MT8RGgQp0aawjKo+97Zfpufqu9RlFhR44coVqtcv36ddrb27Hb7bsuVNWCsdO7isUiVqsVQRAYHx8nnU7T0tLy9IAoKWrFzw+Hw98JgvD3ExMTjoWFhWetVis+n4+Ojg50Oh33JieZmZnBbLEQam19WLGrUWPbAvLo3G4Yu5tzO927ublJb2+vGpMFAoFdbU3YDRj110UiEXp7e5XMQfHAuomVFRaPx+nu7o4899xzf53NZodGRkb+NDw8zObmJj09PZw5cwaXy8Xly5f56vx5JEnC6XT+2HDw46h5zIxWqw+PPdKTDHKjQFLZJ79TRrfRO3YLBqDW71dWVvj5z3+OKIocmIQoZVVlQolEglAotGC1Wv9hcnIyMjc394IkSZampibC4TABv5+ZmRkm7t4FoK21VRVlcRce16Mftjm9v2xALQB6vZ5IJEK5XCYQCOx6v+FOgNSCpnicoiiyurpKR0cHxWLx4FSWAki1WkWv16u+vMFgIBgMXkkkEv91fn7esbKy8oL50T8N6O7qQqvRcPvOHeYedZw3P0rmKY0H9RNttNafJsDcjoFK6rxYLOLz+Z4akO0MvZLHelRdPDiVtd3glK3Ofr8/c+zYsX+VSqWOfvHll+e/++47UqkU/f39vH3mDC6nk4sXL/LNt9+i12pxO50INSpqpxJwo9+eplysuMQGg2Hf/Vn1Y1Okoj5FpWzUicViD/ek7PtNeyDFRS7k8/QeOnSzNRj8Jzdv3fqrL7/6av7GjRuIgsDQq68ydOoUG6LIJyMj3JqawuN0YjYaqdbGADvYkSeBstt+MHio35Wtb/sFZCf3VyFRFNWNSfv+b0BPQ5lMBo1Wy+HDh39js9m6vvnTn/7tl+fPl6eWlnhVkvg3xQIfJJNM3rvHb0ZHSaRS+DweJFFErjX020jMXkHYSeoUQPa613AnqdiOlK3jB7shexckCD+27zgcjsrhw4f/dS6f/+//+NVX/z7e5PzgX5bL/PNolGOSxCfJJBeWl2kJBnnp+ecxPnIWaltzGnk39SWA+u7E3TBI2SuidEzWRva1c6kdQ/3zd/Me5V8LplIpZFm2/l8HRCFBECgVi5RKJcKh0IJekv5ptbX1r/5LsfAfjnu91hfnF/jrthAXOrv49OpVPvv8c155+WVsNhvFBjFBIxCU99T/vhtQagEpFAqP/a+tnRKie8m5lUolnE4n0WiUVCqV/j+uPk4sga1+VQAAAABJRU5ErkJggg=="]]),Z=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).itemList=function(t){var s=Object(j.jsxs)(m,{children:[Object(j.jsxs)("div",{className:"dropdown__item",children:[Object(j.jsx)("img",{src:S[0][1]}),Object(j.jsx)("p",{onClick:e.props.slide,children:S[0][0]})]},S[0][0]),Object(j.jsxs)("div",{className:"dropdown__item",children:[Object(j.jsx)("img",{src:S[1][1]}),Object(j.jsx)("p",{onClick:e.props.tilt,children:S[1][0]})]},S[1][0]),Object(j.jsxs)("div",{className:"dropdown__item",children:[Object(j.jsx)("img",{src:S[2][1]}),Object(j.jsx)("p",{onClick:e.props.showPorts,children:S[2][0]})]},S[2][0])]});return Object(j.jsxs)("div",{className:"dropdown__items",children:[" ",s," "]})},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.showList,t=Object(j.jsx)(p.a,{className:"plusIcon"});return e&&(t=Object(j.jsx)(O.a,{className:"plusIcon"})),Object(j.jsxs)("div",{className:e?"exploreContainer active":"exploreContainer",children:[Object(j.jsxs)("div",{className:"exploreTag",onClick:this.props.toggleList,children:[t,Object(j.jsx)("p",{children:"Explore"})]}),this.itemList(S)]})}}]),s}(c.a.Component),R=s(25),L=s.n(R),W=s(26),f=s.n(W),T=(s(48),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selected:0},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this;console.log(window.innerWidth);var t=["","","","","",""];switch(this.state.selected){case 1:t[1]="Selected";break;case 2:t[2]="Selected";break;case 3:t[3]="Selected";break;case 4:t[4]="Selected";break;case 5:t[5]="Selected"}return Object(j.jsx)("div",{className:this.props.className,children:Object(j.jsxs)("div",{className:"sceneButtons",children:[Object(j.jsx)("div",{className:"circleButton"+t[1],onClick:function(){e.setState({selected:1}),e.props.showFirstImg()}}),Object(j.jsx)("div",{className:"circleButton"+t[2],onClick:function(){e.setState({selected:2}),e.props.showSecondImg()}}),Object(j.jsx)("div",{className:"circleButton"+t[3],onClick:function(){e.setState({selected:3}),e.props.showThirdImg()}}),Object(j.jsx)("div",{className:"circleButton"+t[4],onClick:function(){e.setState({selected:4}),e.props.showFourthImg()}}),Object(j.jsx)("div",{className:"circleButton"+t[5],onClick:function(){e.setState({selected:5}),e.props.showFifthImg()}})]})})}}]),s}(c.a.Component)),M=s(75),A=s.p+"static/media/EXTED_PATCH_0.92e61e9d.png",k=s.p+"static/media/EXTED_PATCH_01.8c825fab.png",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAANCAYAAADWiMnDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEwLTIzVDAwOjM1OjI1KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEwLTMxVDIxOjA1OjE1KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMC0zMVQyMTowNToxNSswNTozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YjlmNTg1Yi1jMGY1LTZhNGYtYjZlOC1hYjg5MjhjZGIxNDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkN2M0ZmFiYi1kYmFiLWRhNGEtYjc0NC03M2I5ZDI1NzgyYWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplOWY3ZDdiMC0xM2M1LWUyNGEtYWZmMC1kNjBlNmJiN2VhMmYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU5ZjdkN2IwLTEzYzUtZTI0YS1hZmYwLWQ2MGU2YmI3ZWEyZiIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0yM1QwMDozNToyNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OGNhNzFjOS1mN2I1LTkwNDktOTg4MS00MGYyOTIzNzU3MDAiIHN0RXZ0OndoZW49IjIwMTktMTAtMjNUMDA6MzU6MjUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWI5ZjU4NWItYzBmNS02YTRmLWI2ZTgtYWI4OTI4Y2RiMTQ5IiBzdEV2dDp3aGVuPSIyMDE5LTEwLTMxVDIxOjA1OjE1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6tiRowAAAkhJREFUeJztmlluwzAMRCeA7n+K3KAH6w70L/1oWgjscEhZdhaH7ye2KI6oxbRj+XA8Hp9QFEWxcxqAr2sHURRFsTUNwMf5+HD+PXXn9piV9SgNiDJGVE/ZM20cuuNIJ9OPbL+W1O1jVHOQmROlb7WZn1ff02Z2Na4qPi+uXg/EPkq0zlm7mfpMf6bOUs1R7d4fwtfLGdYnKmPrWrWbiq0BeBfO3kL/pQ9sZgI9DTsAgD+Y1paJ0fO17Xl6Xh9YLOrG4RElut7GfFUizCaqzDrIxpFZ+NEaYbF5czaSiKN5Gb3RM1tPlBTUfK11ox3RydqiB4MoIaokmYXlKTQArwvEiqIo7ooG4Pl8zJ5eEJT1NquhfLz6t4jqd/GfNcZrdP3dKzN9uvR4sKeuteOItNQ/rlCvAXiZCK4oiuIu6J/siqIodsulk90au0FLd9lm255pc7bOWm1dU28L/ZFNhaxPRiNbb+nGwbW4hRg2o/7GrsOjvGMqHo/drON+N1Zt4aM7h7EDfDCyn3zYdrxtZ7UlzV6c2pht3KMvW20/6PZ2Qk99PsF01NhE/YniH/3cw9Px8D4xYDavntcPex79ev4ZorXm9UXZousse00tne8R3cy57VdmbXsxM91sLLY/f/4NwBszCKdoQEYu+qhMXdBeMs0sAhafVwZiY5oqTubvJX+1SEBsXjwqbnWh2RhgjnvNkcW45GbE/KNxU+dR7FmyiZX52TYzNzNWN4oHiMc9qx8xqpXNEZ7eaD45AT8fFX+KBoqiKHbBN6xASjj4KzAoAAAAAElFTkSuQmCC",F=s.p+"static/media/share.2cef33d1.svg",z=s.p+"static/media/RESIZE_OFF.a9bfd871.svg",D=s.p+"static/media/reset.122d30e4.png",G=s.p+"static/media/logo.faf7acca.svg",Y=(s.p,s.p+"static/media/downarrow.3f420cce.svg"),P=s.p+"static/media/uparrow.239642f5.svg",y=s(69),E=s(70),C=s(71),U=s(72),X=s(76),J=s(73),B=s(74),Q=(s(49),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.url,t=this.props.title;return Object(j.jsxs)("div",{className:"Demo__container",children:[Object(j.jsx)("div",{className:"Demo__some-network",children:Object(j.jsx)(y.a,{url:e,title:t,seprator:"::",className:"Demo__some-network__share-button",subject:this.props.title,children:Object(j.jsx)(E.a,{size:32,round:!0})})}),Object(j.jsxs)("div",{className:"Demo__some-network",children:[Object(j.jsx)(C.a,{url:e,quote:t,className:"Demo__some-network__share-button",children:Object(j.jsx)(U.a,{size:32,round:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)(X.a,{url:e,className:"Demo__some-network__share-count",children:function(e){return e}})})]}),Object(j.jsxs)("div",{className:"Demo__some-network",children:[Object(j.jsx)(J.a,{url:e,title:t,separator:":: ",className:"Demo__some-network__share-button",children:Object(j.jsx)(B.a,{size:32,round:!0})}),Object(j.jsx)("div",{className:"Demo__some-network__share-count",children:"\xa0"})]})]})}}]),s}(i.Component)),H=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={show:!0,ExploreListShow:!1,FeatureListShow:!1,mobileView:!1,showSocialShare:!1},i.createMobileView=function(){L.a;i.state.show||f.a;var e=Y,t="info-div";return i.state.show||(" togglerLeft","sceneButtons-difn-pos",e=P,t="info-div-low","patchContainerDifn"),Object(j.jsxs)(m,{children:[Object(j.jsx)("img",{alt:"",src:G,className:"logo-gl"}),Object(j.jsx)(M.a,{in:i.state.show,timeout:2e3,classNames:"alert",children:Object(j.jsxs)("div",{className:t,children:[Object(j.jsxs)("div",{className:"internal",children:[Object(j.jsx)(T,{className:"sceneButtons",showFirstImg:i.props.showFirstImg,showSecondImg:i.props.showSceondImg,showThirdImg:i.props.showThirdImg,showFourthImg:i.props.showFourthImg,showFifthImg:i.props.showFifthImg}),Object(j.jsx)("img",{src:e,className:"sidePanelToggler",onClick:function(){i.setState({show:!i.state.show})}})]}),Object(j.jsxs)("div",{className:"sidePanel",children:[Object(j.jsx)("p",{className:"tag-p",children:"OMEN 27i Gaming Monitor"}),Object(j.jsx)("img",{src:V,className:"gradient"}),Object(j.jsx)(Z,{slide:i.props.slide,showPorts:i.props.showPorts,tilt:i.props.tilt,showList:i.state.ExploreListShow,toggleList:function(){i.setState({ExploreListShow:!i.state.ExploreListShow,FeatureListShow:!1})}}),Object(j.jsx)(x,{showGsyncTech:i.props.showGsyncTech,exploreOpen:i.state.ExploreListShow,showList:i.state.FeatureListShow,toggleList:function(){i.setState({FeatureListShow:!i.state.FeatureListShow,ExploreListShow:!1})}})]})]})}),Object(j.jsxs)("div",{className:"share-div",children:[Object(j.jsx)("a",{href:"https://www.adloid.io/",children:Object(j.jsx)("img",{src:D,className:"share"})}),Object(j.jsx)("img",{src:F,className:"share",onClick:function(){i.setState({showSocialShare:!i.state.showSocialShare})}}),Object(j.jsx)("img",{src:z,className:"share",onClick:function(){i.setState({show:!i.state.show})}})]}),Object(j.jsx)(M.a,{in:i.state.showSocialShare,timeout:2e3,classNames:"socialShare",unmountOnExit:!0,children:Object(j.jsx)("div",{className:"socialShare",children:Object(j.jsx)(Q,{url:"https://content.hmxmedia.com/OQDF3YHDS/index.html",title:"Hp OMEN"})})})]})},window.innerWidth<=699&&(i.state.mobileView=!0),i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){window.innerWidth<=699?e.setState({mobileView:!0}):e.setState({mobileView:!1})}))}},{key:"render",value:function(){var e=this,t=this.createMobileView();console.log("mob:"+this.state.mobileView);L.a;this.state.show||f.a;var s="sidePanelToggler",i="sceneButtonsContainer",c=A;return this.state.show||(s+=" togglerLeft",i="sceneButtons-difn-pos",c=k),this.state.mobileView?t:Object(j.jsxs)(m,{children:[Object(j.jsx)("img",{alt:"",src:G,className:"logo-gl"}),Object(j.jsx)(M.a,{in:this.state.show,timeout:2e3,classNames:"alert",unmountOnExit:!0,children:Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"tagContainer",children:[Object(j.jsx)("div",{className:"tag",children:Object(j.jsx)("p",{children:"OMEN 27i Gaming Monitor"})}),Object(j.jsx)("img",{alt:"",src:G,className:"logo"})]})})}),Object(j.jsx)(M.a,{in:this.state.show,timeout:2e3,classNames:"alert",unmountOnExit:!0,children:Object(j.jsxs)("div",{className:"sidePanel",children:[Object(j.jsx)("img",{src:V,className:"gradient"}),Object(j.jsx)(Z,{slide:this.props.slide,showPorts:this.props.showPorts,tilt:this.props.tilt,showList:this.state.ExploreListShow,toggleList:function(){e.setState({ExploreListShow:!e.state.ExploreListShow,FeatureListShow:!1})}}),Object(j.jsx)(x,{showGsyncTech:this.props.showGsyncTech,exploreOpen:this.state.ExploreListShow,showList:this.state.FeatureListShow,toggleList:function(){e.setState({FeatureListShow:!e.state.FeatureListShow,ExploreListShow:!1})}})]})}),Object(j.jsx)(M.a,{in:this.state.show,timeout:2e3,classNames:"toggler",children:Object(j.jsx)("img",{src:c,className:s,onClick:function(){e.setState({show:!e.state.show})}})}),Object(j.jsx)(M.a,{in:this.state.show,timeout:2e3,classNames:"sceneButtons",children:Object(j.jsx)(T,{className:i,showFirstImg:this.props.showFirstImg,showSecondImg:this.props.showSceondImg,showThirdImg:this.props.showThirdImg,showFourthImg:this.props.showFourthImg,showFifthImg:this.props.showFifthImg})}),Object(j.jsxs)("div",{className:"share-div",children:[Object(j.jsx)("a",{href:"https://www.adloid.io/",children:Object(j.jsx)("img",{src:D,className:"share"})}),Object(j.jsx)("img",{src:F,className:"share",onClick:function(){e.setState({showSocialShare:!e.state.showSocialShare})}}),Object(j.jsx)("img",{src:z,className:"share",onClick:function(){e.setState({show:!e.state.show})}})]}),Object(j.jsx)(M.a,{in:this.state.showSocialShare,timeout:2e3,classNames:"socialShare",unmountOnExit:!0,children:Object(j.jsx)("div",{className:"socialShare",children:Object(j.jsx)(Q,{url:"https://content.hmxmedia.com/OQDF3YHDS/index.html",title:"Hp OMEN"})})})]})}}]),s}(c.a.Component),q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).slide=function(){e.refs.sceneComponent.slide()},e.tilt=function(){e.refs.sceneComponent.tilt()},e.showPorts=function(){e.refs.sceneComponent.showPorts()},e.showPorts=function(){e.refs.sceneComponent.showPorts()},e.showGsyncTech=function(){e.refs.sceneComponent.showGsyncTech()},e.showFirstImg=function(){e.refs.sceneComponent.showFirstImg()},e.showSceondImg=function(){e.refs.sceneComponent.showSceondImg()},e.showThirdImg=function(){e.refs.sceneComponent.showThirdImg()},e.showFourthImg=function(){e.refs.sceneComponent.showFourthImg()},e.showFifthImg=function(){e.refs.sceneComponent.showFifthImg()},e}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)(m,{children:[Object(j.jsx)(H,{slide:this.slide,tilt:this.tilt,showPorts:this.showPorts,showGsyncTech:this.showGsyncTech,showFirstImg:this.showFirstImg,showSceondImg:this.showSceondImg,showThirdImg:this.showThirdImg,showFourthImg:this.showFourthImg,showFifthImg:this.showFifthImg}),Object(j.jsx)(d,{ref:"sceneComponent"})]})}}]),s}(c.a.Component);var K=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(q,{})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,77)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,n=t.getTTFB;s(e),i(e),c(e),o(e),n(e)}))};n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),_()}},[[55,1,2]]]);
//# sourceMappingURL=main.90569c40.chunk.js.map