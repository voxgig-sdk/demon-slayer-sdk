# DemonSlayer SDK feature factory

from feature.base_feature import DemonSlayerBaseFeature
from feature.test_feature import DemonSlayerTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DemonSlayerBaseFeature(),
        "test": lambda: DemonSlayerTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
