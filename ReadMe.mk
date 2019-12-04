# PowerApp custom Christmas Control
## Get Started
### Install Development Environment

### Run sample code
first time
`npm install`

Run in development Environment
`npm start`

#Package Solution
```
mkdir solutions
cd solution
pac solution init --publisher-name <enter your publisher name> --publisher-prefix <enter your publisher prefix>
pac solution add-reference --path ../
```
-- 'pac solution init --publisher-name peki --publisher-prefix cu


Command first time packaging
`msbuild /t:build /restore`
rerun compile without restore 
`msbuild /t:build `


https://docs.microsoft.com/en-us/powerapps/developer/component-framework/import-custom-controls




pac auth create --url <your Common Data Service org’s url>

 pac auth list 

  Pac auth select --index <index of the active profile>

  pac org who 


  ## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**