

| Command | Description |
| ----------- | ----------- |
| az login | MFA Auth |
| az group | list all resource-groups |
| az aks list | list all clusters |


AKS_RESOURCE_GROUP=
AKS_CLUSTER_NAME=
AKS_NODE_COUNT=
AKS_NODE_POOL_NAME=
`az aks create --name $(AKS_CLUSTER_NAME)  --resource-group $(AKS_RESOURCE_GROUP) --node-count $(AKS_NODE_COUNT) --nodepool-name $(AKS_NODE_POOL_NAME) --generate-ssh-keys `

