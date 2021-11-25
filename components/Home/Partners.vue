<script lang="ts">
import { computed, defineComponent, ref } from "@nuxtjs/composition-api"

const phoneRules: Array<(v: string) => boolean | string> = [
  (v) => v.length === 0 || v.length === 18 || "Номер должен состоять из 11 цифр включая +7",
]

export default defineComponent({
  setup() {
    const name = ref("")
    const phone = ref("")
    const comment = ref("")
    const isSubmitted = ref(false)
    const isLoading = ref(false)

    const counterValue = computed(() => phone.value.replace(/\D/g, "").length)

    const isPhoneValid = computed(() => phoneRules.every((e) => e(phone.value) === true))
    const isSubmitDisabled = computed(() => !(name.value && phone.value && comment.value && isPhoneValid.value))
    const buttonText = computed(() => (isSubmitted.value ? "Спасибо!" : "Отправить"))

    const submit = () => {
      if (isSubmitted.value) return

      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
        isSubmitted.value = true
      }, 1500)
    }

    return {
      phoneRules,

      name,
      phone,
      comment,
      isLoading,
      isSubmitted,

      counterValue,
      isPhoneValid,
      isSubmitDisabled,
      buttonText,

      submit,
    }
  },
})
</script>

<template>
  <section id="partners">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="10" xl="9" class="d-flex flex-column">
          <h2 class="section-title">Заинтересованы?</h2>
          <h3 class="display-1">Оставьте заявку и наш менеджер свяжется с Вами!</h3>
          <v-form>
            <v-container class="d-flex flex-column">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="name"
                    required
                    :readonly="isSubmitted"
                    label="Имя"
                    placeholder="Иван Иванович"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="phone"
                    v-mask="`+7 (###) ###-##-##`"
                    counter="11"
                    :counter-value="() => counterValue"
                    required
                    :readonly="isSubmitted"
                    label="Номер телефона"
                    placeholder="+7 (000) 000-00-00"
                    validate-on-blur
                    :rules="phoneRules"
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="comment"
                    required
                    :readonly="isSubmitted"
                    label="Комментарий"
                    placeholder="Любые пожелания"
                  />
                </v-col>
              </v-row>
              <v-btn
                type="submit"
                class="ml-auto link-button"
                color="#FFCE3E"
                :disabled="isSubmitDisabled"
                :loading="isLoading"
                @click.prevent="submit"
                >{{ buttonText }}</v-btn
              >
            </v-container>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
