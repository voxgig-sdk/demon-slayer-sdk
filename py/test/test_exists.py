# ProjectName SDK exists test

import pytest
from demonslayer_sdk import DemonSlayerSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DemonSlayerSDK.test(None, None)
        assert testsdk is not None
