# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


view --> dispatch --> reducer --> store
​
view den bir istek atıldı. Mesela bir butona onclick yapıldı. İstekten bir dispatch oluşur. Dispatch bir objedir. Bu objenin içinde type ve payload vardır. Type zorunludur, payload duruma göre olabilir ya da olmayabilir.
Sonrasında oluşan istek dahili olarak reducer a gelir. Reducer a gelen bu istek bir switch-case yapısıyla gelen isteğin type ına bakarak state i günceller. Mesela gelen istek Increment ise state.counter +1 yapacak.
Reducer da güncellemeler yapıldıktan sonra store a bunlar basılır. Bu şekilde bir döngü içerisinde global state imiz güncellenir.
​
​
---> src altında redux adında bir klasör oluşturduk.
---> redux klasörü altında index.js dosyası oluşturduk. Normalde bu dosyaya reducer.jsx de diyebilirdik. Ama index.js dediğimiz zaman bir klösör altındaki tüm bileşenlerin toplandığı dosya gibi düşünülebilir. import edileceği zaman .... from "redux" demek yeterli oluyor. Böyle yapmasaydık ... from "redux/reducer" diyecektik.
---> index.js altında ilk önce initial state oluşturduk. Bu bir obje. İçindeki değer de bizim global state imiz. 
---> Ardından export const ile reducer fonksiyonu oluşturduk. Parametre olarak state ve bu state i değiştirmeye izin veren action ı alıyor bu fonksiyon. Context api dekinden farklı olarak burada state e default olarak initialState değerini tanımladık. Tanımlamazsak reducer çalışmaz.
---> Reducer herhangi bir yan etkiden etkilenmeyen bir pure js fonksiyonudur. pure js nin bir dış bağımlılığı olmamalı. Mesela bir fetch yapısı ya da dosya oku/yaz işlemleri dışa bağımlıdır. Ya da reducer içinde bir local state olmamalı. Pure luktan kasıt budur.
---> reducer altında switch-case yapısı oluşturduk. Switch parametre olarak (action.type) aldı. bu action dediğimiz şey aslında butondan gelen istek. İsteğin içindeki type ve payload. Biz de parametre olarak bu action ın içinde type ı aldık.
---> Case olarak da "INCREASE", "DECREASE", "RESET" durumlarını aldık. Bunların altında state imizi değiştirip return ettik. O yüzden de süslü içine aldık.
---> switch-case in sonundaki default: kısmında break olmaz. Mutlaka birşey return edilmeli. O yüzden initial state imizi alsın diye return state dedik.
​
​
---> Store oluşturma kısmına geldik. Normalde src altında store adında bir klasör oluşturuluyor. Ama burada App.js altında yaptık.
---> import {createStore} from "redux" dedik. Üstü çizili gelir, önemli değil. Çizginin kalkmasını istiyorsak {legacy_createStore as createStore} yazılabilir.
---> App içerisinde const store= createStore(reducer) yaptık. createContext gibi bir yapı. Parametre olarak da oluşturduğumuz reducer ı verdik. Tabi import {reducer} from "./redux" diyerek reducer ı da import ettik. "./redux/index" de diyebilirdik. Ama birşeyi değiştirmez.
---> Store u ekledik. Bundan sonrasında provider a / sarmalayıcıya ihtiyacımız var. import {Provider} from "react-redux" dedik.
const store = createStore(reducer)
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>)
---> Yukarıdaki gibi app içerisindeki tüm componentleri Provider ile sarmalladık.
​
​
---> Herşeyi yaptık. Artık UI kısmı kaldık. view kısmı. Counter.js componentine gittik. Buradaki butona tıklandığında increase veya decrease gibi işlemler yapması için onclick verdik.
---> Tıklanıldığında counter ın değerinin değişmesi için dispatch hook unu kullanıyoruz. import {useDispatch} from "react-redux" deyip import ettik.
---> Sonrasında bu hook bize bir fonksiyon döndürüyor. const dispatch = useDispatch() diyerek fonksiyonu dispatch adıyla tanımladık.
---> onClick={()=>dispatch({type: "INCREASE"})} onclick kısmında bunu yaptık. Dispatch bir objedir demiştik. type ve payload keylerini alır. Type zorunlu, burada payload kullanmadık.
​
​
---> Şimdi döngüyü tamamladık. Butona tıklandığında state güncelleniyor. Ama ekran basılmıyor. Ekrana basılması için aynı context api de consuming yaparken useContext hook unu kullandığımız gibi burada da useSelector() hook unu kullanıyoruz.
---> useSelector((state)=>state.counter) dedik. Buradaki counter denilen şey ta ilk başta index.js de oluşturduğumuz initialState içindeki counter. Tabi bu hook u bir değişkene atıyoruz. Herhangibir isim verilebilir buna.
---> const counter = useSelector((state)=>state.counter) diyerek bir değişkene atadık.
---> ekrandaki güncelleme için de; <h1>counter:{counter}</h1> dedik. böylece her tıklandığında ekranda counter değeri 1 artıyor.
​
​
Collapse



:clapclap:
1


1 reply
Today at 12:58 PMView thread







