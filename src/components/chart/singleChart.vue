<script lang="ts">
  import {Component, Mixins, Prop} from "vue-property-decorator";
  import {mixins, Doughnut} from "vue-chartjs";
  import {ChartData, ChartOptions} from "chart.js";

  @Component
  export default class Chart extends Mixins(Doughnut, mixins.reactiveProp) {
      @Prop()
      public chartData!: ChartData

      @Prop()
      public chartOptions!: ChartOptions

      public mounted() {
          this.renderChart(this.chartData, this.chartOptions)
      }
  }
</script>