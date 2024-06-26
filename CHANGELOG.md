# 🚦 CHANGELOG

## [1.9.1](https://github.com/hyunwlee-dev/survey-app/compare/v1.9.0...v1.9.1) (2024-06-27)

### ♻️ Refactor

* **api:** use prisma ORM ([c918d19](https://github.com/hyunwlee-dev/survey-app/commit/c918d1975c86a918f4c0fbc01b6d9a69f4562d98))

## [1.9.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.8.0...v1.9.0) (2024-06-27)

### ✨ Features

* **api:** add supabase logout ([b79fb4f](https://github.com/hyunwlee-dev/survey-app/commit/b79fb4fb7183a3693e3681d5f9ee8bfaef450171))

## [1.8.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.7.0...v1.8.0) (2024-06-27)

### ✨ Features

* authentication process ([5d8d1f7](https://github.com/hyunwlee-dev/survey-app/commit/5d8d1f73924070f71b2b11a3ca4c6d7781357bd9))

## [1.7.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.6.1...v1.7.0) (2024-06-27)

### ✨ Features

* add home link in dashboard page ([01a33c3](https://github.com/hyunwlee-dev/survey-app/commit/01a33c3a723f85fcb74542d431b5080aef30d02b))
* add regionType type ([0a3c362](https://github.com/hyunwlee-dev/survey-app/commit/0a3c362ea2996b1b7dad9c72fbcd75d79653951c))
* **api:** add getTeamList prisma function ([c3a67d2](https://github.com/hyunwlee-dev/survey-app/commit/c3a67d268365298c7eb38d0595207becaf7b5db8))
* **component:** add sum-chart, average-chart, standard-deviation-chart ([5d43552](https://github.com/hyunwlee-dev/survey-app/commit/5d435520c08e749a80eb91a26193661be6adb5e9))

### ♻️ Refactor

* change team-input to team-select-box ([79df182](https://github.com/hyunwlee-dev/survey-app/commit/79df18206187ab152812cb0b2a80d4202590c328))

## [1.6.1](https://github.com/hyunwlee-dev/survey-app/compare/v1.6.0...v1.6.1) (2024-06-26)

### 🐛 Bug Fixes

* change createClient function to server action ([017a5bc](https://github.com/hyunwlee-dev/survey-app/commit/017a5bc47aae7fa3e3d2b90b4d7addd51d5c6d01))

## [1.6.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.5.1...v1.6.0) (2024-06-26)

### ✨ Features

* **api:** add createSurvey server action function ([58b148e](https://github.com/hyunwlee-dev/survey-app/commit/58b148e65d6d849236caefe06e54e0986ca1855f))
* **component:** add home link button in finish page ([c494430](https://github.com/hyunwlee-dev/survey-app/commit/c4944307a580452fe3b577f9d6410e46629b2789))

### ♻️ Refactor

* **util:** add gradeService function ([cf01445](https://github.com/hyunwlee-dev/survey-app/commit/cf014458ebf41e66ba81e77b9c95e045363701f1))

### 💄 Styles

* extends margin-top buttons in survey-access-form ([cd47e09](https://github.com/hyunwlee-dev/survey-app/commit/cd47e09c41181da39b80f4ee5ed4efec84689af6))

## [1.5.1](https://github.com/hyunwlee-dev/survey-app/compare/v1.5.0...v1.5.1) (2024-06-26)

### 🐛 Bug Fixes

* **wrong codes:** remove middleware, treat cookie in login server action ([7f5e030](https://github.com/hyunwlee-dev/survey-app/commit/7f5e030a198de0b65035be5e0c55ac0b155b231d))

## [1.5.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.4.0...v1.5.0) (2024-06-26)

### ✨ Features

* add logged in no access ([4197b35](https://github.com/hyunwlee-dev/survey-app/commit/4197b351143fbc9f1d7c4c961045eb904b14bcd3))

## [1.4.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.3.0...v1.4.0) (2024-06-26)

### ✨ Features

* add supabase login for dashboard access ([ac2d4af](https://github.com/hyunwlee-dev/survey-app/commit/ac2d4afbc0e866ea9e103ca1a75d06fc282551df))
* save survey result to localStorage ([2c989e9](https://github.com/hyunwlee-dev/survey-app/commit/2c989e94791c5e1c037797c548ca274be079f08f))

### 🐛 Bug Fixes

* add suspense boundary for useSearchParams ([a745119](https://github.com/hyunwlee-dev/survey-app/commit/a7451194581d21c72f50add789ff5b67efd42d20))
* **component:** change button text ([a45692d](https://github.com/hyunwlee-dev/survey-app/commit/a45692d8d8b81a647b1a40c8299d8fbb32faa1a7))
* remove necessary import ([2e5a614](https://github.com/hyunwlee-dev/survey-app/commit/2e5a614186f536d997834a89c740b4b25a8cf739))
* **wrong codes:** handle URL encoding redirect in login action ([29df140](https://github.com/hyunwlee-dev/survey-app/commit/29df140c3516ca4039cb6e29fa8de20491d7ba3c))

### 📝 Docs

* **README:** update README.md ([0413231](https://github.com/hyunwlee-dev/survey-app/commit/04132316dd8ea3abf98caf574252b6795e5ddcbd))

### 💫 CI/CD

* **workflow:** add chromatic trigger branch 'storybook' ([777755c](https://github.com/hyunwlee-dev/survey-app/commit/777755c2c945df248818d85964a8bd55345c2968))

## [1.4.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.3.0...v1.4.0) (2024-06-26)

### ✨ Features

* add supabase login for dashboard access ([ac2d4af](https://github.com/hyunwlee-dev/survey-app/commit/ac2d4afbc0e866ea9e103ca1a75d06fc282551df))
* save survey result to localStorage ([2c989e9](https://github.com/hyunwlee-dev/survey-app/commit/2c989e94791c5e1c037797c548ca274be079f08f))

### 🐛 Bug Fixes

* add suspense boundary for useSearchParams ([a745119](https://github.com/hyunwlee-dev/survey-app/commit/a7451194581d21c72f50add789ff5b67efd42d20))
* remove necessary import ([2e5a614](https://github.com/hyunwlee-dev/survey-app/commit/2e5a614186f536d997834a89c740b4b25a8cf739))
* **wrong codes:** handle URL encoding redirect in login action ([29df140](https://github.com/hyunwlee-dev/survey-app/commit/29df140c3516ca4039cb6e29fa8de20491d7ba3c))

### 📝 Docs

* **README:** update README.md ([0413231](https://github.com/hyunwlee-dev/survey-app/commit/04132316dd8ea3abf98caf574252b6795e5ddcbd))

## [1.4.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.3.0...v1.4.0) (2024-06-26)

### ✨ Features

* save survey result to localStorage ([2c989e9](https://github.com/hyunwlee-dev/survey-app/commit/2c989e94791c5e1c037797c548ca274be079f08f))

### 🐛 Bug Fixes

* add suspense boundary for useSearchParams ([a745119](https://github.com/hyunwlee-dev/survey-app/commit/a7451194581d21c72f50add789ff5b67efd42d20))
* remove necessary import ([2e5a614](https://github.com/hyunwlee-dev/survey-app/commit/2e5a614186f536d997834a89c740b4b25a8cf739))
* **wrong codes:** handle URL encoding redirect in login action ([29df140](https://github.com/hyunwlee-dev/survey-app/commit/29df140c3516ca4039cb6e29fa8de20491d7ba3c))

## [1.3.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.2.0...v1.3.0) (2024-06-26)

### ✨ Features

* add login page ([cd76259](https://github.com/hyunwlee-dev/survey-app/commit/cd7625966958670b02d833905126fc09ddd38a17))
* **component:** add facility-satisfaction-fields component (시설 만족도) ([f43ddd6](https://github.com/hyunwlee-dev/survey-app/commit/f43ddd63f4d8284f913d30798aea60df25a9e13c))
* **component:** add finish page ([6040737](https://github.com/hyunwlee-dev/survey-app/commit/6040737a0ba7c00f6d710dc1192c0eb6c95b96df))
* **component:** add funnel component ([0382de8](https://github.com/hyunwlee-dev/survey-app/commit/0382de86756a46840186a5856ba4483ea84dbf49))
* **component:** add service-satisfaction-fields component (서비스 만족도) ([758a3e3](https://github.com/hyunwlee-dev/survey-app/commit/758a3e366bfdd0d299f8fc30e6f53ffdeba7af05))
* **component:** add step-buttons component ([f66ddaa](https://github.com/hyunwlee-dev/survey-app/commit/f66ddaac3286600a3613b08f39af103384491a44))
* **component:** add willingness-revisit-fields component (재방문 의사) ([a8d28cd](https://github.com/hyunwlee-dev/survey-app/commit/a8d28cd1c0ce3a3dbd2216079895e2cf1f575ddd))
* **component:** survey proccess ([0b67ec4](https://github.com/hyunwlee-dev/survey-app/commit/0b67ec4162b90a66ad2296adadb36a65e36f9cfb))

## [1.2.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.1.1...v1.2.0) (2024-06-24)

### ✨ Features

* **component:** add board component, stories ([7b92909](https://github.com/hyunwlee-dev/survey-app/commit/7b929099b2db49ec6120858cec3a582fd76b0efc))

### 💄 Styles

* change design draft ([907698c](https://github.com/hyunwlee-dev/survey-app/commit/907698ca4e494d1f6a302457f5f900902df6fa42))

## [1.1.1](https://github.com/hyunwlee-dev/survey-app/compare/v1.1.0...v1.1.1) (2024-06-24)

### 📝 Docs

* **README:** add chromatic url ([0f24816](https://github.com/hyunwlee-dev/survey-app/commit/0f248163010cf7bb21d3cdabd9ffee35c2487208))

## [1.1.0](https://github.com/hyunwlee-dev/survey-app/compare/v1.0.0...v1.1.0) (2024-06-24)

### ✨ Features

* **component:** add logo component, stories ([0ee00b8](https://github.com/hyunwlee-dev/survey-app/commit/0ee00b81b2a47cafa44b00e527221743ff8e796a))
* **component:** add responsive container component ([e473125](https://github.com/hyunwlee-dev/survey-app/commit/e473125b1b907e422b8bf52773080c5b234342dd))

### 💄 Styles

* change layout ([b7c0c99](https://github.com/hyunwlee-dev/survey-app/commit/b7c0c990c1187cdbb428e5728c7e28b79a7ddbd3))
* **custom:** add Roboto-Mono font ([2227123](https://github.com/hyunwlee-dev/survey-app/commit/22271236653b8fbc8eccebc3bedae85ce067f5d0))

## 1.0.0 (2024-06-23)

### 📝 Docs

* **README:** init readme ([f950169](https://github.com/hyunwlee-dev/survey-app/commit/f950169d8ece077051a23c48e79ea17415197875))

### 💫 CI/CD

* **workflow:** run semantic-release CI ([f379025](https://github.com/hyunwlee-dev/survey-app/commit/f379025661a97d003308d1a677ce600fd9d6ee7f))
