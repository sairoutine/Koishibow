#!perl
use strict;
# from
# http://d.hatena.ne.jp/Raphael-w-b/20060801/1154428822

# ハッシュでグラフを表現。
my %adjacent = (
  'A' => [qw(B C)],
  'B' => [qw(A C D)],
  'C' => [qw(A B E)],
  'D' => [qw(B E F)],
  'E' => [qw(C D G)],
  'F' => [qw(D)],
  'G' => [qw(E)],
  );

sub backtrack_search {
  my ($path, $goal) = @_;
  my $point = $path->[0];

  if ($point eq $goal) {
    # ゴールに到着
    @$path = reverse @$path;
    print "found: @$path\n";}
  else {
    my @next_point;
    for my $q ( @{ $adjacent{$point}} ) {
      # 探索に現在までの経路を含まない
      next if grep { $_ eq $q } @$path;
      push @next_point, $q;
    }
    for (@next_point) {
      backtrack_search([$_, @$path], $goal);
    }
  }
}

backtrack_search([ qw(A) ], 'G');
