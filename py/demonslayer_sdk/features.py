# DemonSlayer SDK feature factory

from demonslayer_sdk.feature.base_feature import DemonSlayerBaseFeature
from demonslayer_sdk.feature.test_feature import DemonSlayerTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DemonSlayerBaseFeature(),
        "test": lambda: DemonSlayerTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
