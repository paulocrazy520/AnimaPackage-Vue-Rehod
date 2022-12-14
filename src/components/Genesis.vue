<style>
.genesis {
  background-color: #34375e;
  border: 1px none;
  height: 1024px;
  padding: 76px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.genesis.screen img {
  position: absolute;
}

.line-1 {
  align-self: flex-end;
  height: 1px;
  margin-top: 589px;
  width: 100%;
}

.input-field {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  /* margin-left: 32px;
  margin-top: 16px; */
  min-height: 66px;
  width: 320px;
  height: 30%
}

.label {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  white-space: nowrap;
}

.input {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 320px;

}

.text {
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  width: 272px;
}

.help-icon {
  align-self: center;
  background-size: 100% 100%;
  height: 16px;
  width: 16px;
}

.button {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
  display: flex;
  height: 36px;
  /* margin-left: 112px;
  margin-top: 164px; */
  overflow: hidden;
  padding: 7px 14px;
  width: 161px;
}

.button:hover {
  background-color: #ffff00;
  box-shadow: 0px 1px 2px #c711af0d;
}

.text-1 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 133px;
  text-align: center;
  white-space: nowrap;
}

.middle-screen {
  display: flex;
  flex-direction: column;
  height: 30%;
}

.bottom-screen {
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
<template>
  <div class="container-center-horizontal">
    <div class="genesis screen">
      <img class="line-1" :src="line1" alt="Line 1" />
      <div class="input-field">
        <div class="label roboto-medium-white-14px">
          <span class="roboto-medium-white-14px">{{ spanText1 }}</span>
        </div>
        <div class="input">
          <div class="text roboto-normal-pale-sky-16px">
            <span class="roboto-normal-pale-sky-16px">{{ spanText2 }}</span>
          </div>
          <div class="help-icon" :style="{ 'background-image': 'url(' + helpIcon + ')' }"></div>
        </div>
      </div>
      <div class="middle-screen">
        <div class="button">
          <div class="text-1 roboto-semi-bold-oxford-blue-14px">
            <span class="roboto-semi-bold-oxford-blue-14px">{{ spanText3 }}</span>
          </div>
        </div>
      </div>
      <div class="bottom-screen">
        <div class="button">
          <button class="text-1 roboto-semi-bold-oxford-blue-14px" @click='prev'>
            <span class="roboto-semi-bold-oxford-blue-14px">Prev</span>
          </button>
        </div>
        <div class="button">
          <div class="text-1 roboto-semi-bold-oxford-blue-14px">
            <span class="roboto-semi-bold-oxford-blue-14px">Next</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Genesis",
  props: ["line1", "spanText1", "spanText2", "helpIcon", "spanText3"],
  method: {
    prev() {

    },
    after() {

    },
    create() {

    }
  }
};
</script>
