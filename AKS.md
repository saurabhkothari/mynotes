

| Command | Description |
| ----------- | ----------- |
| az login | MFA Auth |
| az group | list all resource-groups |
| az aks list | list all clusters |
| az aks list -o table | list all cluster in a tabular format |

 
AKS_RESOURCE_GROUP= <br /> 
AKS_CLUSTER_NAME= <br /> 
AKS_NODE_COUNT= <br /> 
AKS_NODE_POOL_NAME= <br /> 

## create cluster <br>
```
az aks create --name $(AKS_CLUSTER_NAME)  --resource-group $AKS_RESOURCE_GROUP --node-count $AKS_NODE_COUNT --nodepool-name $AKS_NODE_POOL_NAME --generate-ssh-keys 
```

## access cluster (this will add a context in .kube/config file) <br>

```
az aks get-credentials --resource-group $AKS_RESOURCE_GROUP --name $AKS_CLUSTER_NAME
```
