
photo 라이브러리 (https://github.com/connors/photon)에서 electron 관련 예제코드를 수정


- require('app') 호출이 require('electron').app 으로 변경되어 수정
- menu.js 코드에서 require('remote') 호출 오류 수정
- menu listener 등록 코드에서 .js-context-menu class가 html 코드에 class 가 없을 경우에 예외 처리
