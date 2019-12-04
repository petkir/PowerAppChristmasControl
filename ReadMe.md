# PowerApp custom Christmas Control
## Get Started
### Install Development Environment

https://docs.microsoft.com/en-us/powerapps/developer/component-framework/get-powerapps-cli

### Run sample code
first time
`npm install`

Run in development Environment
`npm start`

## Package Solution

Command first time packaging
`msbuild /t:build /restore`
rerun compile without restore 
`msbuild /t:build `
Details:

https://docs.microsoft.com/en-us/powerapps/developer/component-framework/import-custom-controls


## TODO Publishing
https://docs.microsoft.com/en-us/powerapps/developer/component-framework/component-framework-for-canvas-apps

pac auth create --url <your Common Data Service org’s url>

 pac auth list 

  Pac auth select --index <index of the active profile>

  pac org who 


  ## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**