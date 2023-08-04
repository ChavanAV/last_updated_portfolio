'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "363249dd4e5afcca9949655d2b0458b2",
".git/config": "f4982fd93921bfc43228948f744b2842",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2558bb319edad5907262ac4925150d56",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f11911aa26e0d2ee30bb5588e5d6598d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6bca066077cfe941a219e4a69df3bc0",
".git/logs/refs/heads/main": "53cecdbf1c0e899be99086ba542d974f",
".git/logs/refs/remotes/origin/main": "d0791910653f0de086b6fefb64ebe4a3",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0a/6dce6e3b2dd348ff1ae385e178a3853e2e1291": "b936f393eef8951aa465fdd916b2aa77",
".git/objects/0a/e1dd3f13a985f4af3ca21c9060d18d4fb12c0e": "da6cf60587316b7bc8b8c655385909b6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/c3c0b7b85d2a39ce57f3a77822dd639d1dc140": "d7a00e065e1c9581f3c6fef44198366d",
".git/objects/0d/fab30fafc34cf148c619396a4d024e71790c40": "9d9c92f13d2a7277d44a7e40e12ef634",
".git/objects/0e/ad90b03b3ba7b9423ef186f977cb82d9197cf8": "2585f2d5cfef51ebaa902743f751da79",
".git/objects/0f/0a540258beee10909d410f67133d80779caf85": "c357d7ee3def58edb4b9961945ca91cc",
".git/objects/10/ae9fa57b3d8f50f6225b6dc5bfe4ef112eb7f8": "68ff232f88622f3786848bd05bbd1863",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/9b78977fad569bd815bfb6396be05362167784": "41f19fcff2c5591e6ef65b50006e8d26",
".git/objects/16/216c621b9b4964a89497d73d89c7423009cc90": "db8104fcf80429e8ab92e8419f05b775",
".git/objects/18/a54471da3e0dd0a853071736b1a2ff48da5534": "70ea71f46f1eea433dc3662d5aaee5c1",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/d7aa2f11f912ca749fbfada4812758bfd436f3": "769ffe1635286c116a087954ef33c19f",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/33/145fd6359c145e01f9e0d7b18da57e75c1f3cf": "0c55929c14966006ce89eabfc193db2a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/be4fc444ca8dc059b39e42aa90dcfb731a6ea5": "6cdc8f5ade905a60263820f4289079b1",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/9d532392a7347cad7c0002e68ab8fbcbab6742": "bd054b2bb2a0f304d31dd8aa55a57432",
".git/objects/3e/1d65e9446898700db0f9dabdb70756ab295327": "30c136c3ea3ace1c74700f0a64f48029",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/ff4a05c3840d9937d5e5eac8a12a080eb49fdb": "b44c526a49130f87f2e55d0c8e09254c",
".git/objects/49/5e7fa832f6411408205d7a0a9df83ad046663f": "6054da2f33c5af2f9e83636d5580efc0",
".git/objects/4a/15e3ca3922c523cc73b1dc85f0d4ec6be12bd2": "08bcd946c583d26c1b6a31dcc0c680f2",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/4e10498411d5f9f99643fa966eac394e895d71": "55cd0b685730f62d17a66347ef0ee769",
".git/objects/4f/0f71ec4d6ecadba2072b7a5761e1569648c5f8": "452f08f0eda69e636a39af54aca242cc",
".git/objects/4f/b96e77308c5e49a47a1f4d50b9a2cfea0566d1": "c6c494de0b84fcca5847cee2591976f9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/7bfa4192357878f9e213ee0c2b60b94703b9ce": "e16fb464172b2f03bf7be6ab4371d74c",
".git/objects/54/b2434846421b0c1398ec4c03c1fb3a0e2a93f5": "70c94729da65772c5e5dc467b79d6654",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/c553c0a6c9ed20ca5ef32a8f9e6fb1b3737385": "94cb2d95fbfe9abbd8fd3ce6809d9d96",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5d/ba13f9d00bbe4d62c0bab9152d3493b35a81d2": "3e17b8a5555dcf2d0a04e0c6d6a2c877",
".git/objects/61/37f74e549be80901065f3930a4e188db20db7d": "16ab133c43690e788c4fd58283d22ff9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/65/af1818695586a6ab8a7adef414a00667e89424": "4b66938e8bb23a22fd985ae2f96f6fe0",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/5d6f53ebdff5aec2f2b7e62bb6cf43d2241a05": "a5e34eb3e27f6535d337c17356283f15",
".git/objects/6f/9e70d615cf6cb27ca054a7cff10d48e4d53f7f": "a20494cac128393765c4c8eb1ba692e2",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/520e496cb43174923557e8258fe92256e54031": "e14a52ae3e942ba2fd83935225ab5f1e",
".git/objects/77/d3a5970b20ff4d79620a027779f5c696217ae6": "42f87a776a1d7b78aacbad160d7f3330",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/d064cdcd7982b8e43acfb7f0b84075d24c74d7": "79d55c1c49e5aae0d6c0379aa210cf61",
".git/objects/7c/74618e626fcb20f9b9d033100102db74364cd3": "40081dc736082b1dec25aa19a11c9a27",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/fdee1af5ffd25a70f151e1085a2b8327c41282": "a71915ef1b1e3053a351241c7f862c59",
".git/objects/82/95da4af6f9a47e9c96f710960ef22f3794fe7c": "f6e0e94eb095cde4bb1e561be7d363b4",
".git/objects/83/cf4331b8f2793ef5c10a3e297bbdce9ccbfeaa": "88c19cda439af69c46af097b04a1ffbf",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
".git/objects/88/9c3e0436231e02092503c532119917cf9ce1b0": "e0cbb2223447f24814ce0fb577c63468",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8b11cb5d4b3238f04150fb6ac98df775e079bb": "158e8310bc8d80fd33613a0860d484e0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/29b303c630a9723fb579c60b83fac1d0c808ef": "9fd762d8b5cc3c1f69b150464fc5a842",
".git/objects/8b/8cd4e4df7ee75757cf79d863098bc44524fd03": "b7337634a5d56714edab5dcbd5b1094a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/f753098e1a8c5fc1f5c28df2c443e715c8cc40": "3875dda5a4e789eab32382bbb0e0bed8",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/92/557c07370ab3e9822ae03ef27b8f5e8c517554": "db60edcf122887ba0e340079821df4c1",
".git/objects/92/c375b6fde5464d86b12ced96e4d2eba2a2fa04": "d9266011c9778c8b164d88d32dce124c",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/20ce625d565b0e86cb07be3c2cfa6a72d78abd": "a8a48c2c3d84e52d1b0a7e5930715224",
".git/objects/95/f6627266651d8097bf6b824452bab19dcdc240": "ce035f2b31e3489b0bccae64db06b622",
".git/objects/9b/a6983c9da0de8dc8fbb45dfe9dca5bf432108c": "19ffd7fe96b00e5067f4793fae251f43",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/bda5be1c43992843eff28bb980a1e70a4b8dc4": "3b038ab2e3fdb7bf19791a8aae0d67af",
".git/objects/a4/2d08272865f66d29b3bed4873ce7399b09419b": "059fd9830219c12a84488493740cb454",
".git/objects/aa/26f92bc82955af24dd6123e873741eecda325a": "fc22d61b3192371e5e95b4210f43a073",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/178a9936b5c663a80266524a9c044ef40a9817": "4e923ce67615179827130e818f80194d",
".git/objects/b5/51eb82a5d5fc4216cab05095f03db884ec604b": "91407c66318b38e9df95f6af4676cab3",
".git/objects/b6/e4db6b0804abf314292fdec4ce717d4355e9ec": "c3cd816822ddc5290785d58561333992",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/405d1adf30f2ae957aacb7b7461a9b5da29282": "5e3ca79c71933c67bb56f93fcff7857a",
".git/objects/bf/fba9ef1fb6dc5d6103ccbc2dd2d1a6bb3f5879": "75a1403b61797f1a7aab9efe27a5f9ea",
".git/objects/c0/249fd09b7df5d7fb08cb95ec8f51467ca5ea99": "e4f52de8ac3d2bdf7d24c379b9bdf93d",
".git/objects/c5/096dab57fe110a1a40e9df48c8a1931e89b569": "d93372195d5b7230814c7053d086b6b8",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/667cd3c7fbe4e654083ecd5424e3442f00b54a": "b88d69dd9d56add2146fdeb949d8e613",
".git/objects/da/7351ce741aa89f0c28263a0a013b2c67644113": "ca6e01925c3cde576b72f703157b0428",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e3/761029704333459b1a0f242f14d8f40f880057": "a9cdf5a4bc9797b4afc012fd30223b47",
".git/objects/e4/7e09b79eccfee4b6c8d90836a5244e5b4637a9": "5dc957c2b558e107dc047a8a52e63fc6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e6/f2f1e679b833954e1bdb22509ac4b2cb182f77": "318395571d6ae8ee4b8a6fb6256cd942",
".git/objects/e7/4870cc06bcf60a29a5ca25ebbffd8462bfe6b7": "d3b53be23ebd8b874dd1ae9db611479f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/15346d37ba2d4b823a6172a011b8e7583fea09": "c19090b2b5244578c04bbaca62882c11",
".git/objects/f0/d28a50332f432f0b892fbf5686983cb052a539": "5578cd8d221194425e66053684293739",
".git/objects/f1/4a2a932c80fed5b6048a521e025166504571e6": "e7272b3a44cf07352823de8b20a29d91",
".git/objects/f2/d67a314a8328fa893ea0900e6f995fcb0570cc": "e63352754561306277444d123393976b",
".git/objects/f5/1f4f2fa0e4e1461a5f17cd6eab4574a5f73ae7": "b868ee49c7e3fd8f621b70f846c0d6e3",
".git/objects/fb/b371f6cf4b608a192e1f4cad7fe395bec4ae91": "a1e427eac0331c842b0313f404db5b19",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/ff/24b5cc2bf3c5c57b707ad005f969de1627ead9": "10a5e2f81b3ea51684c42b7b7acccb34",
".git/ORIG_HEAD": "a77a717dd49db783ba963cde7fcf7498",
".git/refs/heads/main": "a77a717dd49db783ba963cde7fcf7498",
".git/refs/remotes/origin/main": "ea05ae37712e26edd5c9dd4377156ec8",
"assets/AssetManifest.json": "7afc4b543575f2282d8c99a033a47b2e",
"assets/AssetManifest.smcbin": "bb95fbfb6a8c24824934768f4bd0fa1a",
"assets/assets/anim/b.riv": "5066c7adcd1a56a9f9179cbac3764b6c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "fc766cebe61d32f3cc28e6a5fe7354f5",
"assets/NOTICES": "f84f81d57df66f20871a0d59eebd86be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c8ed9d22a30e7a5a6e9acebff370fee",
"/": "5c8ed9d22a30e7a5a6e9acebff370fee",
"main.dart.js": "f10a854a7a8f96016d03fda0528bbd6f",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
