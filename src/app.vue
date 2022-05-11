<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          BioDepot
        </q-toolbar-title>
      </q-toolbar>

      <q-bar>
        <div class="cursor-pointer">File</div>
        <div class="cursor-pointer">Edit</div>
        <div class="cursor-pointer gt-xs">View</div>
        <div class="cursor-pointer gt-xs">Widget</div>
        <div class="cursor-pointer">ToolDock</div>
        <!-- <q-space />
        <q-btn dense flat icon="minimize" />
        <q-btn dense flat icon="crop_square" />
        <q-btn dense flat icon="close" /> -->
      </q-bar>
    </q-header>
    
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="350"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
        <q-list bordered class="rounded-borders">
          <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar icon="bluetooth" color="primary" text-color="white" />
                </q-item-section>

                <q-item-section>
                  Utilities
                </q-item-section>

                <!-- <q-item-section side>
                  <div class="row items-center">
                    <q-icon name="star" color="red" size="24px" />
                    <q-icon name="star" color="red" size="24px" />
                    <q-icon name="star" color="red" size="24px" />
                  </div>
                </q-item-section> -->
              </template>

              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                User
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-icon color="purple" name="signal_wifi_off" />
              </q-item-section>

              <q-item-section>
                Scripting
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-icon color="purple" name="signal_wifi_off" />
              </q-item-section>

              <q-item-section>
                RNA-seq
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-icon color="purple" name="signal_wifi_off" />
              </q-item-section>

              <q-item-section>
                Miscellaneous
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-icon color="purple" name="signal_wifi_off" />
              </q-item-section>

              <q-item-section>
                Jupyter
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-tabs align="left">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
        <q-toolbar-title style="text-align: center;">
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <div>Bwb</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>