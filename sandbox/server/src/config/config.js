import * as k8s from "@kubernetes/client-node";

const k8sApi = new k8s.KubeConfig();
k8sApi.loadFromDefault();

const k8sCoreApi = k8sApi.makeApiClient(k8s.CoreV1Api);
const k8sNetworkApi = k8sApi.makeApiClient(k8s.NetworkingV1Api);
const k8sAppsApi = k8sApi.makeApiClient(k8s.AppsV1Api);

export { k8sCoreApi, k8sNetworkApi, k8sAppsApi };