# DemonSlayer SDK utility: make_context

from projectname_sdk.core.context import DemonSlayerContext


def make_context_util(ctxmap, basectx):
    return DemonSlayerContext(ctxmap, basectx)
