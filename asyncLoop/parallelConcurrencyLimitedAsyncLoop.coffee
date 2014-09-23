'use strict'

lu = require './loopUtil'

items = lu.items
results = []
running = 0
limit = 2

launcher = () ->
  while running < limit and items.length > 0
    item = items.shift()
    lu.asyncCall item, (result) ->
      results.push result
      running--
      if items.length > 0
        launcher()
      else if running == 0
        lu.final results

    running++

launcher()