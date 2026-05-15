# DemonSlayer SDK utility: make_context

from core.context import DemonSlayerContext


def make_context_util(ctxmap, basectx):
    return DemonSlayerContext(ctxmap, basectx)
