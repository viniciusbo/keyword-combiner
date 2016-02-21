var plan = require('./plan');
var keywords = combineKeywords(plan);

function combineKeywords(plan) {
  var keywords = [];

  for (var i = 0; i < plan.longtail.suffixes.length; i++) {
    var suffixes = plan.longtail.suffixes.splice(i, 1)[0];
    keywords = keywords.concat(combineBaseKeywords(plan.fathead.keywords, suffixes, plan.longtail.suffixes));
  }

  return keywords;
}


function combineBaseKeywords(keywords, suffixes, remainingSuffixes) {
  var output = [];
  var base, combinedSuffixes;

  for (var i = 0; i < keywords.length; i++) {
    base = keywords[i];
    combinedSuffixes = combineBaseWithSuffixes(base, suffixes);
    output = output.concat(combinedSuffixes);

    for (var j = 0; j < combinedSuffixes.length; j++) {
      for (var k = 0; k < remainingSuffixes.length; k++) {
        output = output.concat(combineBaseWithSuffixes(combinedSuffixes[j], remainingSuffixes[k]));
      }
    }
  }

  return output;
}

function combineBaseWithSuffixes(base, suffixes) {
  var combined = [];

  for (var i = 0; i < suffixes.length; i++)
    combined.push(base.concat(' ' + suffixes[i]));

  return combined;
}

keywords.forEach(function(keyword) {
  process.stdout.write(keyword + "\n");
});