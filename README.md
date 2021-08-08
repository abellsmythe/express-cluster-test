## Express Cluster Test

```bash
$ npm i
```

#### Run Test with no clustering

```bash
$ npm run simple
```

```bash
$ npm run test
```

![Test No Clustering](/docs/simple-test.png "Simple")

**Total Time:** 59.83s
**Longest Request:** 6999ms
**Requests per second:** 17

#### Run Test with clustering (8 cpu cores)

```bash
$ npm run cluster
```

```bash
$ npm run test
```

![Test Clustering](/docs/cluster-test.png "Cluster")

**Total Time:** 21.45s
**Longest Request:** 2417ms
**Requests per second:** 47