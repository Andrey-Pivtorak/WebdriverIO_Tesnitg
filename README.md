# WebdriverIO project

### To do before testing:
* _install Node.js (at least 16 version) on your PC_

  [choose version](https://nodejs.org/en/download/releases/)

*  _install docker desktop app on your PC_

    [web site](https://docs.docker.com/)

* _open the command line (or terminal, if VS Code or another apps are used) and copy the repository. Enter the command:_

    **git clone https://github.com/Andrey-Pivtorak/WebdriverIO_Testing.git**

* _move to the WebdriverIO_Testing folder, using the command:_

    **cd WebdriverIO_Testing**

* _install all dependencies, using the command:_

  **npm install**

### To start ful testing enter the command in a command line (or in terminal, if VS Code or another apps are used):
* npm run wdio

### To run single test use the command:

* wdio config/wdio.conf.ts --spec=./test/specs/<fileName>.ts

### To run cross browser testing use the command:

* npm run cross:test

### To create and open the allure report enter command:

* npm run allure:report

### To run docker tests use the command:

* npm run wdio:docker

### To stop docker testing use the command:

* docker-compose -f docker-compose-tests.yml down

### You must have these result:
![](https://github.com/Andrey-Pivtorak/WebdriverIO_Tesnitg/blob/master/test/screnns_result/test_cases_WebdriverIO.png)
![](https://github.com/Andrey-Pivtorak/WebdriverIO_Tesnitg/blob/master/test/screnns_result/test_cases_WebdriverIO_GH.png)

