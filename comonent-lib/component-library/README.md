# Component Library Document
    Örnek olarak oluşturulmuş React Component Library projesidir.
**npm install react react-dom**

<p>
Öncelikle React projesi oluşturuyoruz.
react-app projesi oluşturmak yerine react-dom projesi oluşturulması daha etkili olacaktır. 
Bunun nedeni react-app ile proje tanımlarını ve tasarımını otomatik oluşturulması,library oluşturmada yeteri kadar özgür kılmıyor. 
Bu nedenle basit react-dom projesi oluşturulduğunda, tanımlamalar da yapılacak projeye göre özelleştirilebilir.
</p>

**Storybook yükleme (npm init)**
<p>
React Projesini oluşturduktan sonra genel olarak kabul görmüş dokumantasyon sağlaması açısından storybook kurulumunu yapıyoruz.
Storybook sayesinde oluşturulmuş componentlerin tüm attribute değerlerini görülebilir. Oluşturulan mağazadan ihtiyaç duyulan componenti rahatlıkla seçilebilmesini sağlar.
Storybook projemize install edildiğinde src altında oluşan stories klasörünü silinip, kendi componentlerimizi oluşturuyoruz. 
Projeyi çalıştırmak için `npm run storybook` komutu kullanılır ve ya package.json dosyasının içerisindeki aşağıdaki komut satırı gösterildiği gibi güncellenir. 
Bu sayede daha sonra projede çalışacak hangi kütüphaneye göre projeyi run etmesi gerektiğine bakmadan klasik react start komutu olan `npm start` ile proje run edilebilir.
</p>

```
"scripts": {
"start": "start-storybook"
},
```

**Material-ui yükleme (npm install @material-ui/core)**

<p>
Componentlerimizi material-ui kütüphanesini kullanarak yazıyoruz. Material-ui kütüphanesindeki componentler hazır style verilmiş olduğundan yeniden css yazma maliyetimizi
azaltmış oluyoruz. Aşağıdaki kütüphanemizde oluşturduğumuz Button.js dosyasındaki örnek button kodlarını görebilirsiniz. Props kullanarak component attribute larının olması gereken type ları belirlenir ve default değerler atanır.
https://material-ui.com sayfasından componentler incelenebilir.
</p>

```
//Button.js
import React from 'react';
import { Button as DTPButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const Button = ({ text, color, startIcon, variant, ...props }) => {
   return (
      <DTPButton
         variant={variant}
         color={color}
         startIcon={startIcon}
         {...props}
      >
         {text}
      </DTPButton>
   )
};

Button.propTypes = {

   text: PropTypes.string,
   color: PropTypes.string,
   onClick: PropTypes.func,
   variant: PropTypes.string
};

Button.defaultProps = {
   color: 'primary',
   text: 'DTPButton',
   onClick: undefined,
   variant:'contained'
};

export default Button;
```


**Storybook arayüzünü oluşturma (npm i @storybook/addon-knobs)**

<p>
Yukarıdaki düzenlemeleri yapıp çalıştırdığımızda browser da etkili bir görünüm olmayacaktır. Şimdilik basit bir button tanımlaması yapıldı. 
Bu butonu çeşitlendirip dokumantasyonu sağlamak için .stories.js uzantılı dosya oluşturulması gereklidir. Bu gerekliği storybook install olduktan sonra oluşan 
.storybook klasörü altındaki main.js içerisinden görebeiliriz. Burada componentlerinizi çeşitlendirebilir. 
addon-knobs yardımı ile component attirbute larını kullanıcıya gösterebilirsiniz. addon-knobs kullanımı önemlidir. Developer kullanmak istediği componenti
oluşturabilmek için hangi attirbute ları nasıl kullanması gerektiğini bilmesi gerekmektedir. Button.stories.js içerisinde aynı buttona farklı parametreler vererek
3 farklı button oluşturuldu ve knobs yardımı ile attribute lar dokumante edildi. Delete, Primary ve Seconday isimli 3 buton oluşturuldu. Delete butonunda
yine material-ui kütüphanesinin iconlarından faydalanılarak icon kullanması da sağlandı.
Kullanıcı kütüphaneyi kullanırken sadece ihtiyacı olan attirbute ları doldurup diğerlerini null geçebilir. Ve ya null kullanımı yapılmak istenmiyor ise library içerisindeki
default değerler null verilirek, component kullanıcısının sadece istediği attirbute ları tanımlaması sağlanabilir.
</p>

```
import React from 'react'
import Button from './Button';
import { withKnobs, text, color, object, } from '@storybook/addon-knobs';
import DeleteIcon from '@material-ui/icons/Delete'


export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
}

const Template = (args) => <Button {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  color: color('color', 'secondary'),
  text: text('text', 'Delete'),
  variant: text('variant', 'contained'),
  startIcon: text('startIcon', <DeleteIcon />),
};
export const Primary = () => <Button text={text('text', 'Primary')} color={color('color', 'primary')}
  startIcon='' variant={text('variant', 'contained')} />
export const Secondary = () => <Button text={text('text', 'seondary')} color={color('color', '')}
  startIcon='' variant={text('variant', 'outlined')}></Button>
```
```
Son durumda proje klasörümüz aşağıdaki gibi olmalıdır.

src
└── components
    └──Button
        ├── Button.js
        └── Button.stories.js
        └── index.js
└──index.js
```

    Tüm tanımlamaları yapıp çalıştırdığımızda aşağıdaki görüntü elde edilir.Daha fazla bilgi edinmek için 
    https://storybook.js.org/ sayfasını inceleyebilirsiniz.
![img.png](img.png)

**Babel kurulumu (npm install --dev @babel/core @babel/preset-env @babel/preset-react babel-loader )**

<p>    
Babel kullanılmasının amacı genel olarak her browserın Javascipt ES6 sürümünü desteklemediği için, her browserda oluşan görüntü farklılaşabilir.
Babel kullanarak hangi tarayıca çalıştığını anlayıp, kodlarımızı tarayıcının desteklediği Javasciprt sürümüne otomatik olarak değiştirip,
her browserda aynı sayfa düzenini elde etmemiz sağlanır. Şu aşamada gerekli dönüşümü yapacak babel present kullanımı yeterli olacaktır. 
Install işlemi yapıldıktan sonra src klasörün altına .babelrc sayfası eklenir ve babel için gerekli configüresyonlar burada ayarlanır. 
</p>

```
//.babelrc 
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "esmodules": true,
                    "browsers": [
                        "last 3 versions"
                    ]
                }
            }
        ],
        "@babel/preset-react"
    ]
}
```

**Webpack (npm install --save-dev webpack webpack-cli webpack-node-externals clean-webpack-plugin)**

<p>
Webpack kullanılmasının amacı ise projemizi package haline getirmek. Webpack sayesinde proje build olduktan sonra oluşan dist klasörü sayesinde diğer projeler içerisinde çağırılması sağlanan configürasyon otomatik olarak oluşur.
Library nin hangi isimle çağırılabileceği package.json içerisinde verilen name ile sağlanır. Library çağırıldığında ilk önce çalışması gereken tanımlamalar da webpack install edildikten sora oluşan webpack.config.js içerisinde belirtilir. 
Burada dikkat edilmesi gereken nokta material-ui kütüphanesi aynı zamanda react projesidir. Oluşturduğumuz library de react projesi olduğundan toplamda 2 react projesi kütüphane olarak kullanılamaz. 
material-ui kütüphanesini oluşturduğumuz library içerisine gömmemiz gerekir ki library sadece tek react projesi olarak çalışabilsin. Bunu webpack.config.js içerisine eklediğimiz externals propery ile sağlıyoruz.
</p>

```
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'mylibrary',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [],
    resolve: {
        extensions: ['.json', '.js']
    },
    externals: [
        /@material-ui/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    }
}
```

<p>
Tüm tanımlar bittikten sonra projemizi build etmeye hazırız. Elimizde artık package olduğundan webpack build yapılması gerekmektedir.
npm run build komutu ile webpack in otomatik build olabilmesi için package.json içerisinde aşağıdaki gibi değişiklik yapmamız gerekir.
</p>

```
"scripts": {
    "start": "start-storybook",
    "build": "webpack"
  },
```

**Component library install adresi oluşturma**

<p>
Component library amacıyla oluşturduğumuz projeyi ister gitlab a yükleyip ordan install edebiliriz, istenir ise npm e yüklenip de install edilebilir. 
Biz gitlab üzerinde şirket özelinde kullanılan projelerimizi burada sakladığımız için ve private library olması gerektiğinden gitlab a yüklemeyi tercih ettik. 
Gitlab'a push edilen library, diğer projelere install edilebilmesi için private olmasından dolayı acsess token oluşturulur. 
Ayrıca library içerisindeki package.json içerisine private:true property eklenmelidir. Push edilmiş library istenilen react projesine aşağıdaki gibi install edilebilir.
</p>

```
npm install git+https://[tokenName]:[token]@gitlab.digitalplanet.com.tr/[repoPath]#[branchName]
```

<p>
Master branch inden install edilecek ise branch name yazılmasına gerek yoktur.
Kullanılacak projeye library install edildikten sonra, install edilen projenin package.json dosyasında kütüphanemizi hangi isimle indirildiğini görebiliriz.
"import {Button} from 'libraryName'" şeklinde çağırılarak kullanılabilir. {} arasında hangi sayfanın çağırılacağını Stroybook içerisindeki klasör isimlerinden bulabiliriz. Button örnek olarak yazılmıştır. 
</p>

**Test (npm i --save-dev enzyme enzyme-adapter-react-16**

<p>
Yazılan componentlerin testi için enzyme kütüphanesinden faydalanıldı. src klasorü içerisinde test klasörü açıp, yazacağımız test sayfalarını 
.test.js olarak isimlendirilmesi gerekmektedir. npm test komutu çalıştırıldığında proje otomatikmen test sayfalarını bulup render eder. 
package.json içeridine test aşağıdaki şekilde tanımlanmalıdır.

```
 "scripts": {
    "test": "react-scripts test",
    "start": "start-storybook",
    "build": "webpack"
  },
```

```
Son durumda library projesi:
src
└── components
    └──Button
    └──index.js
└── test
    └── Button.test.js
└── index.js
```
</p>

```
//Button.test.js
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

configure({ adapter: new Adapter() });

const { describe, it } = global;

describe('Button', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button/>);
    });
    it('renders with minimum props without exploding', () => {
        wrapper.setProps({
            text:'hello',
            color:'primary'
        });
        expect(wrapper).toHaveLength(1);
    });
});
```
