## Paso 1

* clonar el proyecto con la siguiente linea `git clone git@github.com:elaniin/react-native-core.git`
* `cd react-native-core`
* `yarn install`


## Paso 2
* Eliminar la carpeta .git con el comando `rm -rf .git`
* Eliminar el archivo CHANGELOG.md con el comando `rm -rf CHANGELOG.md && touch CHANGELOG.md`
* Eliminar archivo INSTALL.md con el comando `rm -rf INSTALL.md`


## Paso 3
* Instalar el paquete react-native-rename con el comando `npm install -g react-native-rename`
* Renombrar el proyecto con el siguiente comando `react-native-rename ‘YOUR_PRODUCT_NAME’ -b your.bundle.id`
* Renombrar el nombre de la carpeta del proyecto con el nombre de utilizado en el paso anterior


## Paso 4: Configuracion en ios
* Actualizar los pods con el comando `pod install` en la carpeta **ios**
* abrir Xcode y cambiar tu **bundle id** y **display name**
* Eliminar de la carpeta **YOURPROYECTNAME** el archivo **GoogleService** y sustituirlo por el de tu proyecto **(Desde Xcode)**
* Cambiar **YOURPROYECTNAME/Images.xcassets** la imagen por defecto para tu splash.


## Paso 5: Configuracion en android
* Sustituir el archivo **google-service.json** de la carpeta **android/app/** por el de tu proyecto
* En carpeta a**ndroide/app/src/main/res** sustituir la imagen por defecto del splash por la de tu proyecto
* En la carpeta **android** en el archivo **.project** cambiar el nombre por el de tu proyecto
* En el archivo **android/app/src/main/java/nombre/de/tu/paquete/SplashActivity,** cambiar **la line 1** por el **nombre de tu paquete**



