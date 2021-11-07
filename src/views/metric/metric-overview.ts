import { Vue } from "vue-class-component";
import Component from "vue-class-component";
import { client } from "@/services/index";
import { GetAllAssetsDto, GetMetricDto, ParentMetric } from "@/services/client";


export default class MetricOverview extends Vue {
  private metricDto: GetMetricDto = new GetMetricDto();
  private assetDto: GetAllAssetsDto = new GetAllAssetsDto();
  private loading = false;

  /* get metricParents(): ParentMetric[] {
    return this.metricDto.parentMetrics || [];
  } */

  get assets(): GetAllAssetsDto[] {
    return this.assetDto.assets || [];
  }

  async created(): Promise<void> {
    this.getMetricOverview();
  }

  async getMetricOverview(): Promise<void> {
    try {
      this.loading = true;
      this.assetDto = await client.AssetClient.getAllAssets();
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  }

  getData(): void {
    this.getMetricOverview();
  }
}
